

const bookTicket = (movie, seats = 1, pricePerSeat =300) => {

    if(typeof movie !== "string" || seats <0 || pricePerSeat < 0) {
        return "Invalid"
    }

    return `${movie}: ${seats} seat(s), Total ${seats*pricePerSeat}`

}

console.log(bookTicket("dune"))
console.log(bookTicket("dune",3))
console.log(bookTicket("dune",2,450))
console.log(bookTicket("dune",2,-450))