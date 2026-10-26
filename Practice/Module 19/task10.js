function getTopSellingProduct(orders) {
  const totals = {};

  orders.forEach((order) => {
    if (totals[order.product]) {
      totals[order.product] += order.unitsSold;
    } else {
      totals[order.product] = order.unitsSold;
    }
  });

  return Object.entries(totals).reduce(
    (topProduct, currentProduct) => {
      if (currentProduct[1] > topProduct[1]) {
        return currentProduct;
      }

      return topProduct;
    }
  )[0];
}

const orders = [
  { product: "Pen", unitsSold: 30 },
  { product: "Bag", unitsSold: 12 },
  { product: "Pen", unitsSold: 25 }
];

console.log(getTopSellingProduct(orders));