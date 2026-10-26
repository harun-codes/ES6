
const mergeInventory = (item1, item2) => {

    if(!Array.isArray(item1) || !Array.isArray(item2)){
        return "Invalid"
       }

       const MargeArray =  [...item1,...item2]
       return MargeArray

}


console.log(mergeInventory([1,2],[3,4]))
console.log(mergeInventory([1,2],"3"))


const highestScore = (score) => {
    if(!Array.isArray(score)){
        return "Invalid"
    }
    return Math.max(...score)

}

console.log(highestScore([3,7,2,9,4]))
console.log(highestScore(3,52,2,))