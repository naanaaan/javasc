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

arr = ['a', 'b', 'c']
console.log(arr.indexOf('b'))

arr.splice(arr.indexOf('b'))
console.log(arr)

arr = ['a', 'b', 'c']
arr.splice(arr.indexOf('b'), 1)
console.log(arr)

arr = ['a', 'b', 'c', 'b']
arr.splice(arr.indexOf('b'), 1)
console.log(arr)

arr = [4, 3, 1, 2]
let s = arr.sort()
console.log(arr, s)

console.log(s == arr)

arr = [8, 11, 22, 23 ,9]
console.log(arr.sort())

console.log(arr.sort((a, b) => a -b))

arr = ['a', 'b', 'c']

for(let i = 0; i < arr.length; i++)
    console.log(arr[i])
   
for(let key in arr) console.log(arr[key])
for(let e of arr) console.log(e)

function print(e){
    console.log(e)
}

function print2(e, i){
    console.log(`[${i}]: ${e}`)
}

function print3(e, i ,arr){
    arr[i] = e.toUpperCase()
}

arr = ['a', 'b']

console.log()
arr.forEach(print)
arr.forEach(print2)
arr.forEach(print3)

let group = {
    title: 'art',
    students: ['winston', 'cal', 'maritha'],
    list(){
        this.students.forEach(studentName =>
            console.log(this.title, ':',  studentName))
    }
}

group.list()

//
arr = ['hello', 'world', 2]
let greeting = arr.join()
console.log(greeting, typeof greeting)

console.log(arr.join('/'))

arr = [1, 2, 3]
str = arr.toString()
console.log(str, typeof str)

str = String(arr)
console.log(str, typeof str)

str = JSON.stringify(arr)
console.log(str, typeof str)

const items = [
    {itemName: 'book', price: 1},
    {itemName: 'computer', price: 100},
    {itemName: 'book', price: 2}
]

const item = items.find(item => item.itemName == 'book')
console.log(item)

const interest = items.filter(item => item.itemName == 'book')
console.log(interest)

const elements = items.map((item, i) =>
    `<div>$${item.itemName}: ${item.price}</div>`)
console.log(elements)

let isExit = items.some(item => item.itemName == 'book')
isExit = items.every(item => item.itemName =='book')
console.log(isExit)