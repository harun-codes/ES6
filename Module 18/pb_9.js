
let getMostExpensiveProduct = (product) => {
    // const keys = Object.keys(product)
    const keys = Object.keys(product)
    let highest = 0;
    let expensiveProductName = ''

    // console.log(keys)
    
    for(let key of keys){
        if(highest < product[key]){
            highest = product[key];
            expensiveProductName = key
        }

        // console.log(key, product[key])
    }

    console.log(expensiveProductName)
}

getMostExpensiveProduct({pen: 20, book: 150, bag: 500, laptop: 30000})