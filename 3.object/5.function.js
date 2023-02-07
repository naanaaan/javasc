function sayHi(myName, ...jobs){
    console.log(`Hi, I am ${myName}.`)
}

sayHi('john')

console.log(typeof sayHi)
console.log(sayHi.name) //function의 기본 key
console.log(sayHi.length)//파라미터 갯수 ...jobs는 그떄끄때달라서 제외


let user = {
    sayHi() {},
    sayBye() {}
}

console.log(user.sayHi.name)
console.log(user.sayBye.name)

sayHi = function(){
    console.log('hi')
    sayHi.count++
}
sayHi.count = 0
sayHi()
sayHi()

console.log(`call count: ${sayHi.count}.`)