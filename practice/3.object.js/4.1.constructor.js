let makeUser = function(userName, age){
    return {
        userName: userName,
        age: age
    }
}

makeUser = function(userName, age){
    return {
        userName,
        age
    }
}

console.log(makeUser('userName', 12))

function User(userName){
    this.userName = userName
    this.greet = () => console.log(`${userName}`)
}

let user1 = User('bob')
user1 = new User('bob')
user1.greet()

let human = new function(){
    this.humanName = 'meg'
    this.age = 27
}
console.log(typeof human, human.humanName)

function BigUser(){
    this.userName = 'amy'
    return {userName: 'beth'}
}

function SmallUser() {
    this.userName = 'lorie'
}

console.log(BigUser().userName, SmallUser() ?? userName)

const user = new Object()
console.log(user)
user.age = 12

const person = Object.create(user)
console.log(person)
console.log(person.age)

person.personName = 'mandarin'
console.log(user)
console.log(user, person)