let user = {}

user.height = 200
user['weight'] = 80

console.log(user.height, user.weight)

delete user.weight
console.log(user.weight)

console.log('height' in user)
console.log('weight' in user)

for(let key in user) console.log(user[key])

user.userName ='paker'
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))

user = {
    greet: () => console.log('hello')
}

user = {}
let address = {}
user.address = address
address.street = 'sejong'
console.log(user.address.street)

console.log(user.city?.cityName)