let animal = {//프로토타입 객체 constructor가지고있음 
    isAlive: true
}

function Rabbit(rabbitName){//
    this.rabbitName = rabbitName
}

console.log(Rabbit.prototype)
//직접코딩한 prototype이 아니고 숨겨진 prototype
let rabbit = new Rabbit('black')
console.log(rabbit.isAlive)
//Rabbit의 prototype의 객체가 animal이다
//기존 프로토타입객체는 constructor에 숨겨진 prototype의 주소와 연결되어 있으며
//animal처럼 객체를 만들었을때 constructor과 다른 animal 프로토타입객체가 생기고 그거에 참조함
Rabbit.prototype = animal
console.log(Rabbit.prototype)
//prototype은 객체의 주소값을 가지고있음 즉 prototpye의 주소를 animal 주소로
// 그리고 주소로 쓰는 객체를 prototype이라하며 prototype의 객체는 constructor가 존재하는데
//여기에는 Rabbit의 주소를 가지고 있음
rabbit = new Rabbit('white')
console.log(rabbit.isAlive)


function Duck(duckName) {
    this.duckName = duckName
}

console.log(Duck.prototype) //plain object.
console.log(Duck.prototype.constructor) //Duck function을 가리킨다.
console.log(Duck.prototype.constructor == Duck) //true임을 확인.

let duck = new Duck('duck')
console.log(duck.__proto__)//duck객체의 prototype값을 읽는다. == Duck.prototype
console.log(duck.__proto__.constructor)// == Duck.prototype.constructor


let duck2 = new Duck('duck2')
console.log(duck2.__proto__ == duck.__proto__) //두 객체의 prototype이 같음을 확인.

let duck3 = new duck.__proto__.constructor('duck')
duck3 = new duck.constructor('duck')