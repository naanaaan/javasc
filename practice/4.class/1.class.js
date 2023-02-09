class User {
    constructor(userName){
        this.userName = userName
    }

    sayHi(){
        console.log(`Hi I am ${this.userName}`)
    }
}

let user = new User('john')
console.log(user.userName)
user.sayHi()

class Animal{
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

function makeClass(pharse){
    return class{
        sayHi(){
            console.log(pharse)
        }
    }
}
User = makeClass('hello')
new User().sayHi()