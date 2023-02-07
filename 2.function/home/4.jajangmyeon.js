//2.function/home/3.jajangmyeon.js 객체지향으로 refactoring하라.
function Food(foodName, favor){
    this.foodName = foodName
    this.favor = favor
}
function Chef(){
    this.cook = (foodName, favor) =>  new Food(foodName, favor)
}
function Waiter(){
    this.serve = food => food
}
const chef = new Chef()
const waiter = new Waiter()
console.log(waiter.serve(chef.cook(`매운`, '짜장면')))
console.log(waiter.serve(chef.cook(`달콤한`, '짬뽕')))