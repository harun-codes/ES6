const cloneAndUpdate = (arr, index, newValue) => { 

const newArray = [...arr]
newArray[index] = newValue
return newArray

}

const arr = [5,10,15]

console.log(cloneAndUpdate(arr,1,99))
console.log(arr)