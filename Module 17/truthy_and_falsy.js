//  falsy value only 6 : false, 0, "", null, undefined, NaN

if(false){
    console.log('false')
}
if(0){
    console.log(0)
}

if(null){
    console.log('null')
}
if(""){
    console.log("")
}
if(undefined){
    console.log(undefined)
}
if(NaN){
    console.log(NaN)
}

// truthy value : empty arr , empty object , string 0, space string etc

if([]){
    console.log("empty array")
}
if({}){
    console.log("empty obj")
}