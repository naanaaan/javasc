function Gun(){
    this.fire = () => console.log('탕탕')
}

function Shooter(shooterName, gun){
    this.shooterName = shooterName
    this.shoot = () => gun.fire()
}

let gun = new Gun()
let shooter1 = new Shooter('최한석', gun)
shooter1.shoot()

function Food(foodName){
    this.foodName = foodName
}

function Mom(){
    this.cook = (foodName) => new Food(foodName)
}

function Child(){
    this.eat = food => console.log(food)
}

const mom = new Mom()
const child = new Child()

child.eat(mom.cook('짜장면'))
