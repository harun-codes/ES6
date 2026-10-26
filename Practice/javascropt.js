function calculateRemainingMoney(totalMoney, cakeCost, donutCost) {
  if(typeof totalMoney !== "number" | typeof cakeCost !== "number" | typeof donutCost !== "number"){
    return "Invalid"
  }

  const moneyLeft= totalMoney - cakeCost;

  if(moneyLeft < 0) {
    return -1
  }
  const donutCount = Math.floor(moneyLeft / donutCost);

  const remainingMoney = moneyLeft - (donutCost * donutCount)
  return remainingMoney
  
}


console.log(calculateRemainingMoney(100,20,10))
console.log(calculateRemainingMoney(50,30,7))


function calculateRemainingMoney(totalMoney, cakeCost, donutCost) {
  // TODO: Implement the function
  
  const moneyLeft = totalMoney - cakeCost 

  if(moneyLeft <= 0){
      return moneyLeft
  }
  const donutCount = Math.floor(moneyLeft / donutCost)
  const remainingMoney = moneyLeft - (donutCount * donutCost)
  return remainingMoney 
}

console.log(calculateRemainingMoney(10,20,5))