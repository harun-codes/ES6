// TODO: problem 1  Find method


let findUserById = (users, id) => {
    let expectedUser = users.find((user) =>{
        return user.id === id
    })
    if(expectedUser) return expectedUser;
     return "User Not Found";
}

let users = [
    {id: 1, name: "rafi"},
    {id: 2, name: "rahim"},
    {id: 3, name: "karim"},
];

// console.log(findUserById(users,3));



// TODO:  problem 2   reduce Method


let getCartTotal = (cart) => {
    let total = cart.reduce((accumulator, elem)=>{

        // console.log(accumulator,elem)
        return accumulator + (elem.price * elem.qty)

    },0)
    return total;

}

let cart = [
    {name: 'pen', price: 20, qty: 3},
    {name: 'Notebook', price: 50, qty: 2},
]

console.log(getCartTotal(cart));
