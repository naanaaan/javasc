let set = new Set()

let user1 = {userName: 'john'}
let user2 = {userName: 'pete'}

set.add(user1).add(user2).add(user1)
console.log(set)

console.log(set.size)
console.log(set.has(user1), set.has(user2))

console.log(set.delete(user1))
console.log(set)
set.clear()
console.log(set )

set.add(user1).add(user2)

for(let user of set) console.log(user)

set.forEach(val => console.log(val))

set = new Set([1, 2, 3])
console.log(set)
set.forEach(val => console.log(val))

let arr =Array.from(set)
console.log(arr)
set = new Set(arr)
console.log(set)