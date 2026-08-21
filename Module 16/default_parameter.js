// default parameter 

function greet(name = "guest"){
    return "Hello " + name;
}

console.log(greet("harun"))
console.log(greet())
console.log(greet("srabon"))


function makeCoffee (suger = 1){
    return "Coffee is pepared with " + suger + " soopan suger";
}

console.log(makeCoffee(3));
console.log(makeCoffee());