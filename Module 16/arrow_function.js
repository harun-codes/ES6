//  Normal Function 

// function sayGreet(name){
//     return `Hello ${name}, Good Morning.`
// }

// Arrow function syntax

// const sayGreet = ()=>{
//     // function body
// }

const sayGreet = (name)=> `hello ${name}, Good Morning.`;   // implicit return 

// console.log(sayGreet('harun'))

// console.log(this)
//  this 

let student = {
    name: 'harun',
    age: 24,
    showName: function(){
        return `name: ${this.name}. age: ${this.age}`
    }
}

console.log(student.showName());
