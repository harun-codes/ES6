const swapValues = (a, b) => {

     [b, a] = [a,b]
    return [a,b] 
}

console.log(swapValues(5,10))
console.log(swapValues(5,13))