// TODO: pass by value (pass by primitive data types)

// let name = 'harun'

// function mFunc(myname){
//     myname = 'srabon'
//     console.log(myname)
// }
// mFunc(name)
// console.log(name)

//TODO: pass by raference  (pass by reference data types)


let student = {
    name: 'harun',
    age: 21
}
function myFunc(data){
    data.name = "srabon"
    console.log(data)
}
myFunc(student)
console.log(student);