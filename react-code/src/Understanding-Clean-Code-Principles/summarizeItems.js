const CATEGORY = { FRUIT: "fruit", VEG: "veg" };

function isEligible(item, minQty) {
  return item?.ok === true && Number(item.qty) > minQty;
}

function lineForCategory(item) {
  const qty = Number(item.qty);
  const name = String(item.name || "");
  const cat = String(item.cat || "").toLowerCase();
  if (cat === CATEGORY.FRUIT) return `${name.toUpperCase()}-${qty}`;
  if (cat === CATEGORY.VEG) return `${name}-${qty}`;
  return null;
}

export function summarizeItems(items, minQty = 0) {
  const eligible = (items || []).filter((it) => isEligible(it, minQty));
  if (eligible.length === 0) {
    return { count: 0, averagePrice: 0, lines: [] };
  }
  const totals = eligible.reduce(
    (acc, it) => {
      const qty = Number(it.qty) || 0;
      const price = Number(it.price) || 0;
      acc.count += qty;
      acc.value += price * qty;
      const line = lineForCategory(it);
      if (line) acc.lines.push(line);
      return acc;
    },
    { count: 0, value: 0, lines: [] }
  );
  const averagePrice = totals.count ? totals.value / totals.count : 0;
  return { count: totals.count, averagePrice, lines: totals.lines };
}
