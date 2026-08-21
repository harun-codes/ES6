

function registerStudent(cb){
    console.log("user is registering. need more data.")


    cb();
}

function userBasicInfo(){
    let student = {
        name: 'harun',
        age: 22,
        roll: 3423
    }
    console.log(student)
}

console.log(registerStudent(userBasicInfo));