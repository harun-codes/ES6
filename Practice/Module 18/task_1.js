
const calculateBill = (amount, taxRate = 0.05) => {
    return amount + (amount * taxRate)
}

console.log(calculateBill(1000))
console.log(calculateBill(1000, 0.10))