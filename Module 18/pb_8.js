

let a = 5;
let b = 10;
// console.log(a,b)
[b, a] = [a, b];
// console.log(a,b);

let nums =  [10,20,30,40,50];

let [first, ...rest] = nums

console.log(first, rest)