//  spread and rest operator 
//  spread symbol ->  ... (3 dots)


let numbers = [10,20,30,40,50,60];

// console.log(...numbers);

// console.log(Math.max(...numbers));

let students = {
    name: "harun",
    age: 35 
}

let students2 = {...students,gap: 3.50};
students.some = "test";
// console.log(students2);


//  Rest Operator -> ...(3 dots but used in parameter)

function sum (a,b,c, ...restNumbers){
    let sum =0 ;
    for(let number of restNumbers){
        sum += number;
    }
    return a+b+c+sum;
}

console.log(sum(3,4,6,7,9,5,8,8,10));