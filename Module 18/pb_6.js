const getGrade = (mark) => {
    if(mark >=90){
        return "A+"
    }
    else if(mark >=80){
        return "A"
    }
    else if(mark >= 60){
        return "B+"
    }
    else {
        return "Fail"
    }
}

console.log(getGrade(95))
console.log(getGrade(82))
console.log(getGrade(45))