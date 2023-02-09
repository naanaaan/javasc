//List는 키가 자동부여 map은 직접 부여 키중복x value 중복가능
let map = new Map()

map.set('1', 'hello')
map.set(1, {userName: 'david'})
map.set(true, function fn() {})
console.log(map.get('1'), map.get(1), map.get(true))
console.log(map.has('1'), map.has(1), map.has(true), map.has(false))//특정키조사
console.log(map.size)
console.log(map.delete(1), map.delete(2))
console.log(map)

map.clear()
console.log(map)

// 맵객체라 이렇게 가능
map = new Map()
map.set(1, 'amella').set(2, 'avery').set(3, 'adela')
console.log(map)

// map.forEach((a, b) => console.log(a, b))
//
let greens = new Map([
    ['cucumber', 500],
    ['tomato', 350],
    ['onion', 50]
])

for(let entry of greens)
console.log(entry)

let keys = greens.keys()
console.log(keys)

//이터레이터라서다음과같이가능
for(let key of keys)
    console.log(key)

let values = greens.values()
console.log(values)

for(let value of values)
    console.log(value)

greens.forEach((val, key) => console.log(key, val))
//map거의안씀 object가 더 편함
//map object 변환가능
let user = {
    userName: 'aiden',
    age: 50,
}
//object > map
let entries = Object.entries(user)
console.log(entries)//형태가 matrix이다
console.log(new Map(entries))

//map > object
map = new Map()
map.set('apple', 1).set('orange', 2).set('pear', 3)
let fruits = Object.fromEntries(map)
console.log(fruits)
