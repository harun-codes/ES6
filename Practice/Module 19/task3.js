const findProductByName = (products, name) => {

return products.find((elem) => elem.name === name)


}

const products = [
    { name: "Pen", price: 10 },
     { name: "Bag", price: 500 }
    ]
    

console.log(findProductByName(products,"Pen"))