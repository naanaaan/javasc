function sayHi(){
    console.log('Hi')
}
setTimeout(sayHi, 1000)

function greet(pharse, who){
    console.log(pharse, who)
}

setTimeout(sayHi, 1000, `hello`, `knox`)

let timeid = setTimeout(() =>{
    console.log(`hoo`)
}, 300)
clearTimeout(timeid)