let user = {
    userName: 'leo'
}
function greet(){
    console.log(`I am ${this.userName}`)

}

greet()
let fn = greet.bind(user)
fn()

setTimeout(fn, 0)

user = {
    userName: 'john',
    greet(){
        console.log(`I am ${this.userName}`)
    }
}
fn = user.greet.bind(user)
fn()

console.log(fn == user.greet)