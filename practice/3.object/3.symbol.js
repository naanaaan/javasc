let id = Symbol()
let id1 = Symbol('id')
let id2 = Symbol('id')

console.log(id1 == id2)
console.log(id, id1, id2)

console.log(id.toString())
console.log(typeof id)
console.log(id1.description, id2.description, id.description)