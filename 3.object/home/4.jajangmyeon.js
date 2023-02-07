//2.function/home/3.jajangmyeon.js 객체지향으로 refactoring하라.
// function Food(foodName, favor){
//     this.foodName = foodName
//     this.favor = favor
// }
// function Chef(){
//     this.cook = (foodName, favor) =>  new Food(foodName, favor)
// }
// function Waiter(){
//     this.serve = food => food
// }
// const chef = new Chef()
// const waiter = new Waiter()
// console.log(waiter.serve(chef.cook(`매운`, '짜장면')))
// console.log(waiter.serve(chef.cook(`달콤한`, '짬뽕')))
//답
function Food(taste, foodName){
    this.taste = taste
    this.foodName = foodName
}

function Chef(taste){
    this.cook = foodName => new Food(taste, foodName)
}

function Waiter(){
    this.order = (foodName, chef) => chef.cook(foodName)
}

let chef1 = new Chef('달콤한')
let chef2 = new Chef('매운')
let waiter = new Waiter()

console.log(waiter.order('짜장면', chef1))
waiter.order('짬뽕', chef2)