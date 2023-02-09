let user1 = {
    userName: 'isable',
    greet(){
        console.log(`I am ${this.userName }.`)
    }
}

let user2 = {
    userName: 'jade',
    greet(){
        console.log(`I am ${this.userName}`)
    }
}

user1.greet()
user2.greet()

//
let userName = 'morpheus'

function greet(){
    console.log(`I am ${this.userName}`)
}
greet()//주어가 global임
greet.call(user1)//user1의 userName을 집어넣는다 주어가 user1
greet.call(user2)//주어user2
greet.call()

user2 = {
    userName: 'colin'
}

user1.greet()
// user2.greet()

user1.greet.call(user2)