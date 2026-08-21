//  TODO:  problem 1 : Callback  function 


let sortDescending = (nums) => {
    // console.log(nums)
    const nums2 = [...nums]
    const sortedNums = nums2.sort((a,b)=>{
        return b-a;  // descending order 
        // return a-b;  // ascending order 
    })
    return sortedNums;

}

let numbers = [1,10,2,25,3]
// console.log("before",numbers)
// console.log(sortDescending(numbers))
// console.log("after",numbers)


// TODO:  problem 2 : debug a bug


let previewDiscount = (cart) => {

    //TODO: Buggy code

    // return cart.map((item)=>{
    //     item.price = item.price - item.price * 0.1 ;
    //     return item;
    // })


    // TODO: fixed code
    let updateCart =  cart.map((item) => {
        return{
            ...item,
            price: item.price - (item.price *0.1)
        }
        
    })
    return updateCart;
}

let cart = [
    {name: 'pen',price: 100},
    {name: 'bag',price: 500},
]

console.log("before",cart)
console.log(previewDiscount(cart))
console.log("after",cart)