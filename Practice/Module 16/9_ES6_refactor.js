

const calculateTotal = (items) => { 

    const total =  items.reduce((sum,elem) => sum +elem.price, 0)
        return `Total: ${total} Taka`
}

console.log(calculateTotal([{price:100},{price:250}] ))
console.log(calculateTotal([{price:80}] ))

