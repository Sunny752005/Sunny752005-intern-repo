export function proc(a, b) {
  var x = 0, y = 0, z = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i].ok == true) {
      if (a[i].qty > (b || 0)) {
        x = x + a[i].qty;
        y += a[i].price ? a[i].price * a[i].qty : 0;
        if (a[i].cat && a[i].cat.toLowerCase() == "fruit") {
          z.push(a[i].name.toUpperCase() + "-" + a[i].qty);
        } else if (a[i].cat == "veg") {
          z.push(a[i].name + "-" + a[i].qty);
        }
      }
    }
  }
  if (x > 0) { return { c: x, avg: y / x, list: z }; }
  return 0;
}
