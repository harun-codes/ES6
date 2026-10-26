
const getManagerName = (employee)  => {

    return employee.manager?.name

}

const employee ={
    name: "mim",
    manager: {
        name: 'tanvir'
    }
}
console.log(getManagerName(employee))
console.log(getManagerName({name:'rafi'}))