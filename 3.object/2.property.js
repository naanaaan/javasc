let user = {}

user.height = 200
user['weight'] = 80

console.log(user.height, user.weight)

delete user.weight
console.log(user.weight)

console.log('height' in user)
console.log('weight' in user)

for(let key in user) console.log(user[key])

user.userName = 'paker'
console.log(Object.keys(user))//객체 property네임이 key라고하며 조회하는 api
console.log(Object.values(user))
console.log(Object.entries(user))//key + value

user = {
    greet: function() {console.log('hello')}
}

//과제: 위 코드를 arrow function으로 refactoring하라.
user = {
    greet: () => console.log('hello')
}
//이렇게도 표현할 수 있다.
user = {
    greet() {
        console.log('hello')
    }
}

user.greet()

/* optional chaining */
user = {}
let address = {}
user.address = address
address.street = 'sejong'
console.log(user.address.street)
// console.log(user.city.cityName)에러 undefined.
console.log(user.city?.cityName)//?쓰면 undefined여도 에러안뜸 undefined에섯 멈춤

let street
// street = user.city.street
street = user?.city?.street
console.log(street)

street = user?.city?.street ?? 'where'//undefined값을 지정함
console.log(street)

// user?.address = 'sejong'

user = null
// user.greet()
user?.greet()

user = {}
// user.greet()
console.log(user.greet?.())