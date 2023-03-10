interface Profile {
    userId: number
    userName: String
    nickName: string
}

function printUserName(profile: Profile) {
    console.log(profile.userId)
}

const profile: Profile = {
    userId: 1,
    userName: 'cain',
    nickName: 'hero'
}

printUserName(profile)
console.log(typeof profile)

//
interface Relationship {
    from: Profile
    to: Profile
}

const relationship: Relationship = {
    from: {
        userId: 1,
        userName: 'cain',
        nickName: 'hero'
    },
    to: {
        userId: 2,
        userName: 'abel',
        nickName: 'warrior'
    }
}

//
interface Account extends Profile {
    email: string
    password: string

}
const account: Account = {
    userId: 3,
    userName: '선정관',
    nickName: '별명',
    email: 'xxx@naver.com',
    password: 'xxx123'
}

console.log(account)
interface User {
    userId: number
    userName: string
    photoUrl?:  string //?은 없어도된다
}

let user: User = {
    userId: 1,
    userName: 'able',
    photoUrl: 'face.jpg'
}

console.log(user)


user = {
    userId: 2, 
    userName: 'able'
}
console.log(user)

//
interface Shape {
    getArea(): number
    getPerimeter(): number
}

class Circle implements Shape {
    constructor(private radius: number){}

    getArea(): number {
        return Math.PI * Math.pow(this.radius, 2)//pow제곱
    }

    getPerimeter() {
        return 2 * Math.PI * this.radius
    }
}

class Rectangle implements Shape {
    constructor(private width: number, private height: number) {}

    getArea(): number {
        return this.width * this.height
    }

    getPerimeter(): number {
        return 2 * (this.width + this.height)
    }
}

const circle = new Circle(4)
const rectangle = new Rectangle(4, 1)

console.log(circle.getArea(), rectangle.getPerimeter())