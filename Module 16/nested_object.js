const user = {
    name: 'harun',
    age: 21,
    something: [20,34,40,50],
    company: {
        name: 'programming hero',
    address: {
        location: "mirpur",
        street: "something"
    }
}
}


const user2 = {
    name: 'harun',
    age: 21,
    something: [20,34,40,50],
//     company: {
//         name: 'programming hero',
//     address: {
//         location: "mirpur",
//         street: "something"
//     }
// }
}

// console.log(user.age,user.something,user.company)
// const key = 'company'
// console.log(user[key])


// optional chaining 

// console.log(user.company.name, user.company.address.location)
// console.log(user2?.company?.name, user2?.company?.address?.location)


// Object Loop 

for(let element in user){
    console.log(element,user[element]);
}

const keys = Object.keys(user)
const values = Object.values(user)
const entris =  Object.entries(user)


for (let key of keys){
    console.log(key, user[key]);
}


for (let elem of entris){
    const [key,value] = elem
    console.log(key,value);
}





