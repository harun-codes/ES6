
const calculateBMI = (weight, height) => {

    if(weight <=0 || height <=0) {
        return "Invalid"
    }

    const BMI = weight / (height*height)

    return BMI.toFixed(2)
}

console.log(calculateBMI(70,1.75))
console.log(calculateBMI(50,1.6))
console.log(calculateBMI(70,-1.75))