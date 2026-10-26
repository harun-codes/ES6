
const generateReceipt  = (customerName, items, total) => {

    if(!Array.isArray(items) || items.length === 0){
        return "Invalid"
    }

    return  `Receipt for ${customerName} Items: ${items} Total: ${total} `    

}

console.log(generateReceipt("rakib",["pen","book"],150))
console.log(generateReceipt("rakib",[],150))