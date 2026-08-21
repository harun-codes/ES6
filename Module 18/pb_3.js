
function calculateTotal (discount, ...prices){
    console.log(prices)
    // let total =0 ;
    // for(let i =0;i<prices.length;i++){
    //     total += prices[i];
    // }
    // console.log(total);

    let total = prices.reduce(
        (acumulator, currentValue) => acumulator + currentValue,0);


    let discountAmount = (total * discount) / 100 ;
    // console.log(discountAmount)   
    let totalAfterDiscountApply = total - discountAmount
        // console.log(total);
        return totalAfterDiscountApply;


}

console.log(calculateTotal(10,100,200,50,300))