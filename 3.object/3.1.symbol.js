/* symbol: unique identifier */
let id = Symbol()
let id1 = Symbol('id')
let id2 = Symbol('id')

console.log(id, id1, id2)//Symbol타입 값을 String으로 보여준다

console.log(id1 == id2)//값이 유일하기때문에 false가 나온다

console.log(id.toString())//Object을 다 상속받음 자바랑 같음
console.log(typeof id)
//Symbol타입의 값을 출력할수 있음
console.log(id1.description, id2.description, id.description)

let user = {
    userName: 'neo'
}

let userId = Symbol('userId')
user.userId = 1
user[userId] = 2

console.log(user)
//과제: user 를 iterating 해서, key 들을 출력하라.
for(let key in user) console.log(key) //symbol은 iterating했을 떄 감춰짐

console.log(Object.keys(user))


id1 = Symbol.for('regNo')
id2 = Symbol.for('regNo')
console.log(id1 == id2) //for을 썼을때는 같다. for function으로 만든 것

let key = Symbol.keyFor(id1)
console.log(key, typeof key)

id1 = Symbol.for('regNo')//for(key) key라고 부름
id2 = Symbol('regNo')//Symbol(descreption) description이라 부름
console.log(id1 == id2) //다름

console.log(Symbol.keyFor(id1), Symbol.keyFor(id2))