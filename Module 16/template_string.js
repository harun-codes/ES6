//  template String  -> backticks sign 

let name = "harun";
let price = 500;
let quantity = 5 ;
let location = `badda, dhaka`;

// let message = "Hello " + name + ". Your bill is " + price ;
let message = `Hello, ${name}. Your bill is ${price * quantity}.`

console.log(location);
console.log(message);