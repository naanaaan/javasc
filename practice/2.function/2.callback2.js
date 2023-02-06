function sayOdd(num){
    console.log(`${num} is an odd number.`)
}

function sayEven(num){
    console.log(`${num} is an even number.`)
}

function lookNum(fn1, fn2){
    const num = parseInt(Math.random * 10) + 1
    if(num % 2 != 0) fn1(num)
    else fn2(num)
}
lookNum(sayOdd, sayEven)

let chef1 = function(food){
    return `달콤한 ${food}`
}

let chef2 = function(food){
    return `매운 ${food}`

}

let waiter = function(food, chef){
    return chef(food)
}

console.log(waiter('짜장면', chef1))