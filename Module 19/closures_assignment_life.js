// TODO: problem 1  : Closure method 


let createLifeCounter = () => {
    let lives = 3 ;

    return () => {
        if(lives >0){
            lives--;
        }
        return lives
    }
}

let rahimLifeUpdate = createLifeCounter();
let karimLifeUpdate = createLifeCounter();
let akashLifeUpdate = createLifeCounter();


console.log(rahimLifeUpdate())
console.log(rahimLifeUpdate())
console.log(rahimLifeUpdate())
console.log(rahimLifeUpdate())

console.log(karimLifeUpdate())
console.log(karimLifeUpdate())
