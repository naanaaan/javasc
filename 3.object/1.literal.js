//객체이다.
let user = {
    userName: 'frances',
    age: 70
}
//propertyname은 스트링 값은 any
user = {
    userName: {
        first: 'bob',
        last: 'smith'
    },
    'nick name': 'tiger face',
    age: 13,
    intersts: ['music', 'movie'],
    sing: () => console.log('lala')
}

console.log(user.userName)
console.log(user.userName.first)
user.sing()

// user.'nick name' 괄호써야함 ''정의했으면
console.log(user['nick name'])
console.log(user['userName']['first'])

user.userName.first = 'john'
user['age'] = 50
console.log(user.userName.first, user.age)

let key = 'nick name'
console.log(user[key])
key = 'age'
console.log(user[key])

let man = {
    manName: 'samuel',
    1: 'one',
    2: 'two',
}
// man.1 스트링아닌 숫자면 에러
console.log(man['1'])
