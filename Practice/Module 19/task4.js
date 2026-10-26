
const getTotalStockValue = (products)  => {

    return products.reduce((sum, total) => sum + (total.price *total.stock),0)


}
console.log(getTotalStockValue([{ price: 50, stock: 4 }, { price: 20, stock: 10  }] ))