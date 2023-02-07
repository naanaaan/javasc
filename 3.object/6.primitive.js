let date1 = new Date(2023, 2, 7)
let date2 = new Date(2023, 2, 6)

console.log(date1 - date2)//초를 의미한다. 객체가 숫자로 알아서 바낌
//Symbol타입은 []
let user = {
    userName: 'amanda',
    age: 20,
    [Symbol.toPrimitive](hint){
        return hint == 'string' ? this.userName : this.age
    }
}
//toPrimitive는 자동 콜되며 Symbol은 그냥 Symbol인지 알기위한 접두사
let user2 = {
    age: 30,
    [Symbol.toPrimitive](){
        return this.age
    }
}
//${}을 쓰면 toPrimitive을 콜한다.
console.log(`${user}`)
console.log(user > user2) //20 > 30 user2는 파라없어서 30 
console.log(user + 50)
console.log(user2 + 50)

user = {
    userName: 'neo',
    age: 11,
    toString(){
        return this.userName
    }
}
console.log(user + '')
user.valueOf = function() {
    return this.age
}
console.log(user + 100)

//
userStr = JSON.stringify(user)//json형태의 문자로 바꿔줌
console.log(userStr)
console.log(typeof userStr)