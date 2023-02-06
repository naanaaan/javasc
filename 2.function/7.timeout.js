function sayHi(){
    console.log('Hi')
}

setTimeout(sayHi, 1000)//function, 꺼낼시간ms  꺼낼시간 지나고 call

function greet(phrase, who){
    console.log(phrase, who)
}

setTimeout(greet, 2000, 'hello', 'knox')

let timeId = setTimeout(() => console.log('hoo'), 3000)
clearTimeout(timeId)//실행안됨
