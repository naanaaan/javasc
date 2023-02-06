let user = {}

user.height = 200
user['weight'] = 80

console.log(user.height, user.weight)

delete user.weight
console.log(user.height, user.weight)

console.log('height' in user)
console.log('weight' in user)

for(let key in user) console.log(user[key])

user.userName = 'parker'
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))

user = {
    greet: function() {console.log('hello')}
}

user = {
    greet() {
        console.log('hello')
    }
}

user.greet()

user = {}
let address = {}

user.address = address
address.street = 'sejong'
console.log(user.address.street)
console.log(user.city?.cityName)

let street
street = user?.city?.street
console.log(street)

street = user?.city?.street ?? 'where'
console.log(street)

user = null
user?.greet()

user = {}
console.log(user.greet?.())