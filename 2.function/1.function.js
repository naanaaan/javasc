function greet() {
    console.log(`hello`)
}

greet()
//변수에 function을 줄때 이름을 주지않는다
let salute = function(){
    console.log(`hi`)
}

salute()
console.log(salute)

let sayHello = function(user, greeting) {
    return `${greeting}, ${user}`
}
console.log(sayHello('rebecca', 'hello'))

//과제 : HI 라고 인사하는 function 을 정의하고, 실행하라.

// let sayHi = function(){
//     console.log('HI')
// }
// sayHi()
//답--------------------- 
const sayHi= function(){
      console.log('HI')
 }
 const say = sayHi
 say()
 //----------------------

 let shout = function() {
    return function() {
        console.log('yoo hoo')
    }
 }

 let speak = shout()
 speak(); //아래꺼랑 분별못해서 에러떠서 ;넣어줬음
 
(function(){
    console.log('earth')
})() //이름없는 fucntion

let myFn = function(fn) {
    const result = fn()
    console.log(result)
}

myFn(function() {
    return 'moon'
})

let argFn = function(){
    return 'star'
}
myFn(argFn)

let showMsg = function(from, msg='no message'){//기본값 undefined인데 이렇게 설정해줄 수 있음
    console.log(`${from}: ${msg}`)
}

showMsg('trinity', 'follow rabbit')
showMsg('trinity')
