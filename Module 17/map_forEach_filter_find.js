//TODO: Map
let array = [2, 4, 6, 8, 10];

// let double = [];
// for(let i=0;i<array.length;i++){
//     double.push(array[i]*2);
// }
// console.log(double);

// TODO:  to modify array and get new array

const double = array.map((elem) => elem * 2);
// console.log(double);

// TODO:  foreach : simply iterate loop

let rolls = [10, 20, 30, 40];

rolls.forEach((elem, ind, arr) => {
//   console.log(elem, ind, arr);
});


// TODO: filter: filter out element and create new array based on condition 


let prices = [100,200,300,400,500,600]

let expensiveProducts = prices.filter((elem)=> elem >= 500)
// console.log(expensiveProducts);

// TODO:  find: find out first element based on condition 


let prices2 = [100,200,300,400,501,500,600]

let expensiveProduct = prices2.find((elem)=> elem >= 500)
// console.log(expensiveProduct);



