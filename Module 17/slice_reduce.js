// TODO: slice 

const fruits = ["apple","banana","mango","orange","grape"];

const sliced = fruits.slice(1,3)
// console.log(sliced)


// TODO: reduce 

let nums = [10,20,30,40,50]
let sum = nums.reduce((acumulator,elem,ind,array)=> {
    console.log(acumulator,elem)
   return  acumulator + elem
}, 0)

console.log(sum)
