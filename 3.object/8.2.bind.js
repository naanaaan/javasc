let user ={
    userName: 'leo'
}
function greet(){
    console.log(`I am ${this.userName}`)
}
//call은 호출만하고 bind는 함수를 리턴한다.
greet()
// greet.bind(user)()  fn()이 이거임
let fn = greet.bind(user)
fn()

setTimeout(fn, 100)

user = {
    userName: 'john',
    greet(){
        console.log(`I am ${this.userName}`)
    }
}
// fn 에 user.greet 을 할당하라.
//      greet의 this 엔 user가 담겨있따.
fn = user.greet.bind(user)
setTimeout(fn, 200)//?왜 setTimeout하면 한개실행되고 fn()하ㅓ면 뒤개되지

console.log(fn == user.greet)

