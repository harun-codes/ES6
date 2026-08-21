// TODO:  problem 1   


let getExpensiveItemTotal = (cart, minPrice) =>{

    let total = cart
    .filter((product )=> product.price >= minPrice)
    .map((product) => product.price * product.qty)
    .reduce((accumulator, elem) => accumulator + elem, 0);

    
    // let modifiedProducts = filteredProducts.map(product => product.price*product.qty);
    
    // let total = modifiedProducts.reduce((accumulator, elem) => accumulator + elem,0);

    return total
}


let cart = [
    {name: "pen", price: 20, qty: 3},
    {name: "Headphone", price: 800, qty: 1},
    {name: "Notebook", price: 50, qty: 2},
    {name: "Watch", price: 1500, qty: 2},
];

console.log(getExpensiveItemTotal(cart,500))

