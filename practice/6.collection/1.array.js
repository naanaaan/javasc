let arr = new Array(1, 'hello', true, {age: 3}, function(){}, class A{})
console.log(arr)

arr = [null, undefined, NaN]
console.log(arr)

arr = []
arr[0] = 'a'
arr[2] = 'c'

console.log(arr)
console.log(arr[0])
console.log(arr[1])

console.log(arr.length)

let matrix = [
    [1,2],
    [3, 4]
]

let a = [1,2]
let b = [2,3]
let c = a.concat(b)
console.log(c)

arr = []
arr.push(1)
arr.push(2)
arr.push(3)

console.log(arr)
console.log(arr.pop())
console.log(arr)

arr = []
arr.push(1)
arr.push(2)
arr.push(3)

console.log(arr)
console.log(arr.shift())
console.log(arr)

arr = [1, 2, 3]
arr.reverse()
console.log(arr)

a = [0, 1, 2]
b = a.slice(1)
console.log(b, a)

arr = [0, 7, 8, 5]
arr.splice(0, 2, 1,2,3,4)
console.log(arr)