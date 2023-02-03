function sayOdd(num){
    console.log(`${num} is an odd number.`)

}

function sayEven(num){
    console.log(`${num} is an even number.`)
}

function lookNum(fn1, fn2){
    const num = parseInt(Math.random() * 10) + 1
    if(num % 2 != 0) fn1(num)
    else fn2(num)
}

lookNum(sayOdd, sayEven)