//class잘안씀 react에서 벼렸음
class User {
    constructor(userName) {//문법상 정해져있따{
        this.userName = userName
    }

    sayHi(){
        console.log(`Hi, I am ${this.userName}`)
    }
}

let user = new User('john')
console.log(user.userName)
user.sayHi()

// User('john') 생성자는 new없이 가능한데 class는 new가 있어야함

class Animal {
    constructor(){
        this.animalName = 'animal'
    }

    run(){
        console.log(`${this.animalName} run.`)
    }

    stop(){
        console.log(`${this.animalName} stop.`)
    }
}

let animal = new Animal()
console.log(animal.animalName)
animal.run()
animal.stop()

function makeClass(phrase){
    return class{
        sayHi(){
            console.log(phrase)
        }
    }
}

User = makeClass('hello')
new User().sayHi()