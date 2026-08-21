
let user1 = {
    name: "harun",
    address: {
        city: "sherpur",
    },
}

let user2 = {
    name: "harun",
    // address: {
    //     city: "sherpur",
    // },
}

const getCity = (user) => {
    return user.address?.city;  // optional chaining
}

console.log(getCity(user1))
console.log(getCity(user2))