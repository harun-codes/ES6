
const printObjectDetails = (obj, looptype) => {

        if(typeof obj !== 'object' || obj === null || Array.isArray(obj) )
        {
            return "Invalid"
        }

        if(looptype !== "forin" && looptype !== "forofentries" && looptype !== "entriesDestructure")
        {
            return "Invalid"
        }

        if(looptype === 'forin'){
            const result = []

            for (const key in obj){
                result.push(`${key}: ${obj[key]}`)
            }
            return result

        }

        if(looptype === 'forofentries'){
            const result = []

            for(const entry of Object.entries(obj)){
                const key = entry[0]
                const value = entry[1]
                
                result.push(`${key}: ${value}`)
            }
            return result
        }

        if(looptype === 'entriesDestructure'){
            return Object.entries(obj).map(([key, value]) => {
                return `${key}: ${value}`
            })
        }
}



const product = {
  name: "Laptop",
  price: 50000,
  stock: 10
};

console.log(printObjectDetails(product, "forin"))
console.log(printObjectDetails(product, "forofentries"))
// console.log(printObjectDetails(product, "forofentries"))
console.log(printObjectDetails(product, "entriesDestructure"))
console.log(printObjectDetails({}, "loopThrough" ))