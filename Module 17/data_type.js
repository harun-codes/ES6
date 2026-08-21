// two data types - 1. primitive data types: string , number, boolean ,undefined , null
            //      2. non-primitive data types: function, object and array



let name = 'Harun'
let age = 22 
let isMarried = false
let salary = null
let universityResult = undefined

console.log(typeof(name),typeof(age),typeof(isMarried),typeof(salary),typeof(universityResult));

// non-primitive 

let student = {
    name: "harun"
}
let arr = [23,35,345]
function add(a,b){
    return a+b;
}

console.log(typeof(student),typeof(arr),typeof(add));