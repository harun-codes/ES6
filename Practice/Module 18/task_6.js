
const promoteEmployee = (employee, newTitle) => {


    return {
        ...employee,
        title:newTitle
    }



}

const employee = {
    name:"rafi",
    title : "junior dev"
}

console.log(promoteEmployee(employee, "Senior Dev"))
console.log(employee)
