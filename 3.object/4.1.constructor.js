let makeUser = function(userName, age){
    return {
        userName: userName,//파라
        age: age
    }
}
//위 value에 pramameter의 값들을 알아서 넣어줌
makeUser = function(userName, age){
    return {
        userName,
        age
    }
}

console.log(makeUser('doris', 57))
//생성자표현을 위해 명사 대문자씀, this.이 생성자의 객체의 필드?
function User(userName){
    // this = {}//new만들면 이 변수가 만들어짐
    this.userName = userName
    this.greet = () => console.log(`I am ${this.userName}`)
    // return this //이것도 생략돼있는 건데 new할때 만들어지는 리턴값
}

let user1 = User('bob')//이건그냥 function을 콜한것
console.log(user1)//객체생성한 게 아니다.
user1 = new User('bob')
console.log(user1) //new연산자를 써서 객체를 만들 수 있다.

user1.greet()
console.log(Object.keys(user1))

const user2 = new User('sarah')
user2.greet()

let str = String(1)
console.log(typeof str)

str = new String(1)
console.log(typeof str)

let human = new function(){
    this.humanName = 'meg'
    this.age = 27
}
console.log(typeof human, human.humanName)

function BigUser(){
    this.userName = 'amy'
    return {userName: 'beth'}
}

function SmallUser() {
    this.userName = 'lorie'
}
// SmallUser().userName을 고쳐서 error 가 발생하지 않도록 하라.
console.log(BigUser().userName, SmallUser() ?? userName)

const user = new Object()
console.log(user)
user.age = 12

//view object
const person = Object.create(user)
console.log(person)
console.log(person.age)
console.log(person == user)//같진 않음 

person.personName = 'mandarin'
console.log(user)//user에 조회안됨
console.log(user, person)