class Animal {
    constructor(name){
        this.name = name
    }

    run(speed){
        this.speed = speed
        console.log(this.name, this.speed, 'run.')
    }

    stop() {
        this.speed = 0
        console.log(this.name, this.speed, 'stop.')
    }
}

let animal = new Animal('animal')
console.log(animal)

animal.run(10)
console.log(animal)

animal.stop()
console.log(animal)

class Rabbit extends Animal {
    /*
    constructor(...args){
        super(...args) animal의 생성자
    }
    */
   hide(){
        console.log(this.name, 'hide. ')
   }
}

let rabbit = new Rabbit()
console.log(rabbit)

rabbit = new Rabbit('rabbit')
console.log(rabbit)

console.log(rabbit.name)
rabbit.run(100)
rabbit.hide()

Rabbit = class extends Animal {
    constructor(rabbitName, color){
        super(rabbitName) //부모의생성장
        this.color = color
    }

    stop(){
        super.stop()//주어가 부모
        this.hide()//주어가 객체
    }

    hide(){
        console.log(this.color, this.name, 'hide.')
    }
}

rabbit = new Rabbit('rabbit', 'black')
rabbit.stop()