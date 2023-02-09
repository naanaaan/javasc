let arr = new Array(1, 'hello', true, {age: 3}, function fn(){}, class A{})
console.log(arr)

arr = [null, undefined, NaN]
console.log(arr)

arr = []
arr[0] = 'a'
arr[2] = 'c'

console.log(arr)
console.log(arr[0])
console.log(arr[1])

console.log(arr.length)//3 undefined도 할당됨

let matrix = [
    [1, 2],
    [3, 4]
]

let a = [1, 2]
let b = [2, 3]
let c = a.concat(b)//a+b
console.log(c)

arr = []
arr.push(1)//스택 맨아래 1
arr.push(2)//1위에 2
arr.push(3)

console.log(arr)
console.log(arr.pop())//맨위꺼 last of 뭐시기
console.log(arr)

arr = []
arr.push(1)
arr.push(2)
arr.push(3)

console.log(arr)
console.log(arr.shift())//맨아래
console.log(arr)

arr = [1, 2, 3]
arr.reverse() //순서 반대로
console.log(arr)

a = [0, 1, 2]
b = a.slice(1)//a의 인데스1 이후에 데이터들을 잘라 넣음
console.log(b, a)

arr = [0, 7, 8, 5]
arr.splice(0, 2, 1, 2, 3, 4)//0번인덱스에서, 2개를 잘라냄, ~그틈에 넣을 다음 데이터
console.log(arr)

arr = ['a', 'b', 'c']
console.log(arr.indexOf('b'))//몇번인덱스인지

arr.splice(arr.indexOf('b'))//자르고 버림 변수에 안넣었잖음
console.log(arr)


arr = ['a', 'b', 'c']
//과제: splice()로 arr에서 'b'만을 삭제하라.
arr.splice(arr.indexOf('b'), 1)
console.log(arr)
//
arr = ['a', 'b', 'c', 'b']
arr.splice(arr.indexOf('b'), 1) //처음발견되는 b인덱스
console.log(arr)

//
arr = [4, 3, 1, 2]
let s = arr.sort()//정렬
console.log(arr, s)
//과제: s가 view object 인지를 확인하라.
console.log(s == arr)//true나옴 즉 arr객체가 그대로 return
//
arr =[8, 11, 22, 23, 9]//유니코드 순서대로 정렬한다 string으로
console.log(arr.sort())

console.log(arr.sort((a, b) => a - b))
console.log(arr.sort((a,b) => b- a))

arr = ['a', 'b', 'c']

for(let i = 0; i < arr.length; i++)
    console.log(arr[i])

//과제: 위와 다른 for로 arr를 iterating 하라.
for(let key in arr) console.log(arr[key]) //in 은 객체
for(let e of arr) console.log(e)//of는 collection
//{
function print(e){
    console.log(e)
}

function print2(e, i){
    console.log(`[${i}]: ${e}`)
}

function print3(e, i, arr){
    arr[i] = e.toUpperCase() //대문자로 교체
}

arr = ['a', 'b']

console.log()
arr.forEach(print)

arr.forEach(print2)

arr.forEach(print3)
console.log(arr)

//
arr = [1, 2, 3]
let arr2 = arr.map(e => e * 2) //원소 *2값 리턴
console.log(arr, arr2, arr == arr2)

//
let group = {//배열은 키가 숫자로 되어있음 이건 아님
    title: 'art',
    students: ['winston', 'cal', 'maritha'],
    list(){
        this.students.forEach(studentName => 
            console.log(this.title, ':', studentName))
    }
}

group.list()

//
arr = ['hello', 'world', 2]
let greeting = arr.join()//join하면 문자열로 바뀜 중요 많이씀 
console.log(greeting, typeof greeting)

console.log(arr.join('/'))//구분자 기본 ,
//과제: arr.join()에서 'helloworld2'를 return하라.
console.log(arr.join(''))
//

arr = [1, 2, 3]
str = arr.toString()
console.log(str, typeof str)

//
str = String(arr)
console.log(str, typeof str)

//
str = JSON.stringify(arr)//중요
console.log(str, typeof str)

//
const items = [
    {itemName: 'book', price: 1},
    {itemName: 'computer', price: 100},
    {itemName: 'book', price: 2}
]

const item = items.find(item => item.itemName == 'book')
console.log(item)//콜백에서 true가나오면 걸 리턴 먼저 발견되는거

// filter와 map의 i는 그냥 파라미터2개넣을 수 있는 걸 보여주기 위해서 그냥 넣은거
const interest = items.filter((item, i) => item.itemName == 'book')
console.log(interest)//이건 전부 리턴

//중요
const elements = items.map((item, i) => 
    `<div>${item.itemName}: ${item.price}</div>`)
console.log(elements)