class Animal {
    constructor(name){
        this.name = name
    }

    run(speed){
        this.speed = speed
        console.log(this.name, this.speed, 'run.')
    }

    stop(){
        this.speed = 0
        console.log(this.name, this.speed, 'stop.')
    }
}

let animal = new Animal('animal')
console.log(animal)

animal.run(10)
console.log(animal)

animal.stop()
console.log(animal )

class Rabbit extends Animal {
    hide(){
        console.log(this.name, 'hide.')
    }
}

let rabbit = new Rabbit()
console.log(rabbit)

rabbit = new Rabbit('rabbit')
console.log(rabbit)

console.log(rabbit.name)
rabbit.run(100)
rabbit.hide()

Rabbit = class extends Animal{
    constructor(rabbitName, color){
        super(rabbitName)
        this.color = color
    }

    stop(){
        super.stop()
        this.hide()
    }
    hide(){
        console.log(this.color, this.name, 'hide.')
    }
}

rabbit = new Rabbit('rabbit', 'black')
rabbit.stop()