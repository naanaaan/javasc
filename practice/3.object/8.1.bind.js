let user = {
    userName: 'madona',
    greet(){
        console.log(`I am ${this.userName}`)
    }
}

user.greet()
console.log()
// setTimeout(user.greet.bind(user), 100)

let fn = user.greet
setTimeout(fn, 200)

setTimeout(()=> user.greet(), 300)