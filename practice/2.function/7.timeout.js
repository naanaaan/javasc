function sayHi(){
    console.log('Hi')
}

let timeId = setTimeout(sayHi, 1000)
clearTimeout(timeId)

function sayHi2(a, b){
    console.log(a, b)
}

setTimeout(sayHi2, 1000, 'a', 'b')