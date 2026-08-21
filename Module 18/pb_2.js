
function receipGenerator (name,price,qty){
    return `${name} x${qty} = ${price*qty} Taka`;
}

console.log(receipGenerator("pen",20,5))
