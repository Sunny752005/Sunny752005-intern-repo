
export function validateOrder(order, user) {
  if (!order || !Array.isArray(order.items) || order.items.length === 0) {
    return "Your cart is empty.";
  }
  if (!user || !user.id) {
    return "You must be logged in to place an order.";
  }
  for (const item of order.items) {
    const invalidQty = typeof item.qty !== "number" || item.qty <= 0;
    const invalidPrice = typeof item.price !== "number" || item.price < 0;
    if (!item.id || invalidQty || invalidPrice) {
      return "Invalid item in cart.";
    }
  }
  return null; 
}


export function computeSubtotal(items) {
  return items.reduce((sum, i) => sum + i.qty * i.price, 0);
}

export function applyDiscounts(subtotal, coupon, userTier) {
  let shipping = subtotal > 100 ? 0 : 9.95;
  let discount = 0;
  if (!coupon) return { discount, shipping };

  const code = coupon.toUpperCase();
  if (code === "WELCOME10") {
    discount = Math.min(subtotal * 0.1, 20);
  } else if (code === "FREESHIP") {
    shipping = 0;
  } else if (code === "VIP25" && userTier === "VIP") {
    discount = subtotal * 0.25;
  } 

  return { discount, shipping };
}

export function computeTotals({ subtotal, discount, shipping, taxRate = 0.1 }) {
  const taxable = Math.max(subtotal - discount, 0);
  const tax = round2(taxable * taxRate);
  const total = round2(taxable + tax + shipping);
  return { taxable, tax, total };
}

function round2(n) {
  return parseFloat(n.toFixed(2));
}


export function buildOrderPayload(order, user, pricing) {
  return {
    userId: user.id,
    items: order.items.map(i => ({ id: i.id, qty: i.qty, price: i.price })),
    coupon: order.coupon || null,
    pricing,
    placedAt: new Date().toISOString(),
  };
}


export function persistOrderLocally(storage, savedOrder) {
  const history = JSON.parse(storage.getItem("order_history") || "[]");
  history.push(savedOrder);
  storage.setItem("order_history", JSON.stringify(history));
}


export function trackOrder(analytics, userId, total, itemCount, couponUsed) {
  analytics.track("order_submitted", { userId, value: total, itemCount, couponUsed });
}

export function handleCouponWarnings(ui, coupon, subtotal, userTier) {
  if (!coupon) return;
  const up = coupon.toUpperCase();
  const valid =
    up === "WELCOME10" ||
    up === "FREESHIP" ||
    (up === "VIP25" && userTier === "VIP");

  if (!valid) ui.showWarning("Coupon not recognized or not applicable.");
}

export function showSuccessAndNavigate(ui, saved, total) {
  ui.clearCart();
  ui.showSuccess(`Order #${saved.id} placed! Total: $${total}`);
  ui.navigate(`/orders/${saved.id}`);
}

export async function submitOrderRefactored(order, user, ui, api, storage, analytics) {
  const validationError = validateOrder(order, user);
  if (validationError) {
    ui.showError(validationError);
    return;
  }

  const subtotal = computeSubtotal(order.items);
  const { discount, shipping } = applyDiscounts(subtotal, order.coupon, user.tier);
  handleCouponWarnings(ui, order.coupon, subtotal, user.tier);

  const { tax, total } = computeTotals({ subtotal, discount, shipping, taxRate: 0.1 });
  const payload = buildOrderPayload(order, user, { subtotal, discount, shipping, tax, total });

  ui.setLoading(true);
  try {
    const res = await api.post("/orders", payload);
    if (!res || !res.ok) {
      ui.showError("Could not place order. Please try again.");
      return;
    }
    const saved = await res.json();

    try {
      persistOrderLocally(storage, saved);
    } catch (e) {
      console.warn("Local persistence failed", e);
    }

    try {
      trackOrder(analytics, user.id, total, order.items.length, Boolean(order.coupon));
    } catch (e) {
      console.warn("Analytics failed", e);
    }

    showSuccessAndNavigate(ui, saved, total);
  } catch (err) {
    console.error(err);
    ui.showError("Unexpected error. Please try again.");
  } finally {
    ui.setLoading(false);
  }
}
