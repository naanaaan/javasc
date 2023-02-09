let set = new Set()

let user1 = {userName: 'john'}
let user2 = {userName: 'pete'}

set.add(user1).add(user2).add(user1)
console.log(set)//중복 x

//
console.log(set.size)
console.log(set.has(user1), set.has(user2), set.has({}))

//
console.log(set.delete(user1))
console.log(set)

set.add(user1)

for(let user of set) console.log(user)
console.log()
set.forEach(val => console.log(val))

//
set = new Set([1, 2, 3])
console.log(set)
//l은 중복되니까 하나 생략됨
set = new Set('hello')
console.log(set)

let arr = Array.from(set)
console.log(arr)