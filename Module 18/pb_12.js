

const cartCalculator = (products) => {

    let totalItem = 0;
    let totalPrice = 0;

    for(let product of products){
        totalItem += product.qty;
        totalPrice += (product.price * product.qty)
    }

    return `Total: ${totalItem} items, ${totalPrice} Taka`;

};

const products = [
  {
    name: "pen",
    price: 100,
    qty: 1,
  },
  {
    name: "notebook",
    price: 100,
    qty: 2,
  },
];

console.log(cartCalculator(products))
console.log(cartCalculator([]))