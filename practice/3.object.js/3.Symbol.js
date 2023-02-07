let id = Symbol()
let id1 = Symbol('id')
let id2 = Symbol('id')

console.log(id, id1, id2)
console.log(id1 == id2)

console.log(id.toString())
console.log(typeof id)

console.log(id.description, id1.description, id2.description)

let user = {
    userName: 'neo'
}

let userId = Symbol('userId')
user.userId = 1
user[userId] = 2

console.log(user)

for(let key in user) console.log(key)

console.log(Object.keys(user))