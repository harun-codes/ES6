
const getFormattedPrices = (prices)=> {

    const newArray = prices.map((elem)=> `$${elem}`)
return newArray

}

console.log(getFormattedPrices([100,250,75]))