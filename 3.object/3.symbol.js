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