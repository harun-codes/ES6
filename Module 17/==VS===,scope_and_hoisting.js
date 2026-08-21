// TODO: == VS ===

// console.log(5 == "5")
// console.log(5 === "5")

// console.log(0 == false)
// console.log(0 === false)

// TODO: scope 
//  3 types  --> 1. Global Scope  2.Block Scope  3. Function Scope

// TODO: 1. Global Scope

// let name = 'harun'

// if(true){
//     console.log(name)
// }

// for(let i =0;i<4;i++){
//     console.log(name);
// }


// TODO: 2. Block Scope 

// if(true){
//     let age = 23;
//     console.log(age);
// }

// TODO: 3. function Scope 

// function add(a,b){
//     let sum = a +b 
//     return sum;
// }
// console.log(add(3,4));
// console.log(sum);

// TODO:  HOISTING 


console.log(age)   // undefined 
var age = 22 

// console.log(x);  // error 
let x = 34 ;

console.log(add(3,4)) //  perfectly work

function add(a,b){
    return a+b;
}