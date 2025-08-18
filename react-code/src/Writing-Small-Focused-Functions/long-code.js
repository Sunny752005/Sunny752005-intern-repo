

export async function submitOrder(order, user, ui, api, storage, analytics) {
  try {
    if (!order || !Array.isArray(order.items) || order.items.length === 0) {
      ui.showError("Your cart is empty.");
      return;
    }
    if (!user || !user.id) {
      ui.showError("You must be logged in to place an order.");
      return;
    }
    for (const item of order.items) {
      if (!item.id || typeof item.qty !== "number" || item.qty <= 0) {
        ui.showError("Invalid item in cart.");
        return;
      }
      if (typeof item.price !== "number" || item.price < 0) {
        ui.showError("Invalid item price.");
        return;
      }
    }


    let subtotal = 0;
    for (const item of order.items) {
      subtotal += item.qty * item.price;
    }

    let shipping = subtotal > 100 ? 0 : 9.95;
    let discount = 0;


    if (order.coupon) {
      if (order.coupon.toUpperCase() === "WELCOME10") {
        discount = Math.min(subtotal * 0.1, 20);
      } else if (order.coupon.toUpperCase() === "FREESHIP") {
        shipping = 0;
      } else if (order.coupon.toUpperCase() === "VIP25" && user.tier === "VIP") {
        discount = subtotal * 0.25;
      } else {
        ui.showWarning("Coupon not recognized or not applicable.");
      }
    }


    const taxable = Math.max(subtotal - discount, 0);
    const tax = parseFloat((taxable * 0.1).toFixed(2));
    const total = parseFloat((taxable + tax + shipping).toFixed(2));


    const payload = {
      userId: user.id,
      items: order.items.map(i => ({ id: i.id, qty: i.qty, price: i.price })),
      coupon: order.coupon || null,
      pricing: { subtotal, discount, shipping, tax, total },
      placedAt: new Date().toISOString()
    };

    ui.setLoading(true);


    const res = await api.post("/orders", payload);
    if (!res || !res.ok) {
      ui.setLoading(false);
      ui.showError("Could not place order. Please try again.");
      return;
    }

    const saved = await res.json();


    try {
      const history = JSON.parse(storage.getItem("order_history") || "[]");
      history.push(saved);
      storage.setItem("order_history", JSON.stringify(history));
    } catch (e) {
      console.warn("Could not persist order locally", e);
    }


    try {
      analytics.track("order_submitted", {
        userId: user.id,
        value: total,
        itemCount: order.items.length,
        couponUsed: Boolean(order.coupon)
      });
    } catch (e) {
      console.warn("analytics failed", e);
    }


    ui.clearCart();
    ui.showSuccess(`Order #${saved.id} placed! Total: $${total}`);
    ui.navigate(`/orders/${saved.id}`);
  } catch (err) {
    console.error(err);
    ui.setLoading(false);
    ui.showError("Unexpected error. Please try again.");
  } finally {
    ui.setLoading(false);
  }
}
