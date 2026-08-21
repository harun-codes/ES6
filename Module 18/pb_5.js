
const calculateShipping = (orderAmount, shippingFree = 60) => {
    if(orderAmount >=1000){
        return "Free shipping"
    }
    else {
        return `Shipping Fee: ${shippingFree} Taka`
    }
}

console.log(calculateShipping(1200))
console.log(calculateShipping(500))
console.log(calculateShipping(500,100))