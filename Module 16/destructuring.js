// destructuring for array

const numbers = [10,20,30,40,50];

const [ten,twenty, , ,fifty] = numbers   // destructuring

// console.log(ten,twenty,fifty);

// destructuring for object 

const student = {
    name: 'harun',
    age: 21,
    marks: {
        phy: 95,
        math: 45
    }
}

const {age, name: fullName, marks:{phy,math} } = student

// const math = student.marks.math;

console.log(fullName,age,phy,math)
