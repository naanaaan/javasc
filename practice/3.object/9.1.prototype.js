let animal = {
    isAlive: true
}

function Rabbit(rabbitName){
    this.rabbitName = rabbitName
}

console.log(Rabbit.prototype)

// console.log(rabbit.isAlive)

Rabbit.prototype = animal
console.log(Rabbit.prototype)

let rabbit = new Rabbit('black')
console.log(rabbit.__proto__)
console.log(rabbit.isAlive)

function Duck(duckName){
    this.duckName = duckName
}

console.log(Duck.prototype)
console.log(Duck.prototype.constructor)

let duck = new Duck('duck')
console.log(duck.__proto__)
console.log(duck.__proto__.constructor)