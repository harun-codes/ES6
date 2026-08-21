//  object method:  keys, values, entries, delete,seal,freeze 

const user = {
    name: "harun",
    age: 23,
    id: 3443
}
const keys = Object.keys(user)
const values = Object.values(user)
const entris =  Object.entries(user)

// console.log(keys,values,entris);

// for (let elem of entris){
//     const [key,value] = elem
//     console.log(key,value);
// }

//  delete 

// delete user.age
// delete user.name
// console.log(user)

// seal and freeze 

// seal  add and delete not allow.  but edit is allow

// const bankAccount = {
//     accNumber: "1234",
//     balance: 2333
// }

// Object.seal(bankAccount);
// delete bankAccount.balance;
// console.log(bankAccount);

// freeze  add , delete and edit not allow 

const birthCertificate = {
    name: "harun",
    birthDate: "3-3-2005"
}
Object.freeze(birthCertificate)
delete birthCertificate.birthDate;
console.log(birthCertificate)