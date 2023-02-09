let obj = {}

console.log(obj.__proto__)
console.log(obj.__proto__ == Object.prototype)

obj = new Object()//1번줄이 이거임
console.log(obj.__proto__)
console.log(Object.prototype.__proto__)//Object가 최상위기떄문에 이것의 프로토는 없음

console.log(obj.toString())

let arr1 = [1, 2]
let arr2 = new Array(1, 2)//위코드는 이 코드를 줄여서 쓴 것
console.log(arr1.__proto__ == arr2.__proto__)
console.log(arr1.__proto__ == Array.prototype)

console.log(Array.prototype.__proto__) //Array의 프로토 Object
console.log(Object.prototype)
console.log(Array.prototype.__proto__ == Object.prototype)

let one = new Number(1)
console.log(one.toString())

function User() {}
let user = new User()
console.log(user.toString())//먼저 user에 toString찾고 없으면 부모에서 찾음
console.log(obj.toString())