// TODO: problem 1 

let applyDiscount = (prices, discountRate = 0) => {
    let pricesAfterDiscount = prices.map((elem,ind,arr)=>{
        // console.log(ind,elem)
        const discountedPrice = elem - (elem*discountRate) / 100 ;
        return  discountedPrice ;
    })
    return pricesAfterDiscount

}

let productPrices = [500,1000,250,400,700]
// console.log(applyDiscount(productPrices ,10))
// console.log(productPrices)


// TODO:  problem 2 


let getPassingStudents = (students, thresold) => {
    let filterStudent = students.filter((student) => {
        // console.log(student)

        return student.marks >=thresold
    })
    return filterStudent
}

let students = [
    { name: "harun", marks: 76},
    { name: "karim", marks: 40},
    { name: "akash", marks: 59},
    { name: "rahim", marks: 60},
    
]

console.log(getPassingStudents(students,50))

