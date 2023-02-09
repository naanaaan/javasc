let obj = {}

console.log(obj.__proto__)
console.log(obj.__proto__ == Object.prototype)

obj = new Object()
console.log(obj.__proto__)
console.log(Object.prototype == obj.__proto__)

console.log(obj.toString())


let arr1 = [1, 2]
let arr2 = new Array(1, 2)//위코드는 이 코드를 줄여서 쓴 것
console.log(arr1.__proto__ == arr2.__proto__)
console.log(arr1.__proto__ == Array.prototype)

