let user = {
    userName: 'madona',
    greet(){
        console.log(`I am ${this.userName}.`)
    }
}

user.greet()

setTimeout(user.greet, 100)//function을 넣어야하는데 user.greet은 객체이기 때문이다
// setTimeout(user.greet.bind(user), 100) 이것도되넹
let fn = user.greet
setTimeout(fn, 200)

setTimeout(() => user.greet(), 300)