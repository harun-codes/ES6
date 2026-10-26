
const sumAllPrices = (prices)  => {
    let sum = 0
    for( const num of prices){
        sum += num
    }

    return sum

}

console.log(sumAllPrices([100,250,75]))