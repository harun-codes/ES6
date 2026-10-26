const  getAvailableProducts = (products) => {

return products.filter((elem) => elem.stock >0)



}

const product = [
    {name:'pen',stock:5},
    {name:'bag',stock:0},
    {name:'notebook',stock:2}
]
console.log(getAvailableProducts(product))