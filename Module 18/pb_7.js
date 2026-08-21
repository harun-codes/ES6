
const responseExtractor = (obj) => {

    const {user:{name: userName ,age = 18}} = obj

        return {userName,age};

}

console.log(responseExtractor({user: {name: "haurn", age: 22}}))
console.log(responseExtractor({user: {name: "haurn"}}))