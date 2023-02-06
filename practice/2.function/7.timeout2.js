function sayHi(){
    console.log('Hi')
}

setTimeout(sayHi, 1000)

function greet(pharse, who){
    console.log(pharse, who)
}

setTimeout(greet, 2000, 'hello', 'knxo')

let timeId = setTimeout(() =>{
    console.log('hoo')
}, 3000)
clearTimeout(timeId)