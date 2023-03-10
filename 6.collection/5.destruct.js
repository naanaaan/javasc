//spread와 비슷 둘자 중요 자주씀
let arr = ['ilya', 'kantor']
let [firstName, lastName] = arr
console.log(firstName, lastName)
//n개 변수 한번에 선언
let [one, two] = [1, 2, 3]
console.log(one, two)

let [three, four] = [3]
console.log(three, four)

let [one2, three2] = [1, 2, 4]
console.log(one2, three2)

//
let s = 'i am'
let [a, b, c] = s
console.log(a, b, c)
// 
arr = s.split(' ')
console.log(arr)

let[a2, b2] = arr 
console.log(a2, b2)

let [a3, b3] = new Set(arr)
console.log(a3, b3)

//
let user = {
    userName: 'oscar',
    age: 6
}
let entries = Object.entries(user)
console.log(entries)

for(let [key, val] of Object.entries(user))
    console.log(key, val)


    //
    let map = new Map([
        ['userName', 'oscar'],
        ['age', 6]
    ])

for(let [key, val] of map)
    console.log(key, val)

//
let [x, y, ...rest] = [1, 2, 3, 4]
console.log(x, y, rest)

//
let [x2, y2=10] = [1]
console.log(x2, y2)

//
let options = {
    title: 'menu',
    height: 100,
    width: 200
}

let{title, height, width} = options
console.log(title, height, width);

({title, width, height} = options)
console.log(title, height, width)

let {width: w, height: h} = options
console.log(w, h)

let {title: t, ...other} = options
console.log(t, other)//other에 객체들어감

let {tite: subject, wide=10} = options
console.log(subject, wide)



// let obj = {a: "Seoul", b: "Tokyo", c: "Beijing", d: "Washington", e: "New Delhi"}
 
// let {a, b, c} = obj
// let {a: Korea, b: Japan, c: China} = obj
// console.log(obj)

let bread = {
    size: {
        width: 100,
        height: 200
    },
    items: ['cake', 'donut'],
    extra: true
}

//과제: bread에서 size와 items를 뽑아라.
// let{size, items} = bread
// console.log(size, items)
//

let {
    size: {
        width: w2,
        height: h2
    },
    items: [item1, item2]
} = bread
console.log(w2, h2, item1, item2)
//
let menu = {
    title: 'menu',
    items: ['list', 'add'],
    expired: 10
}
//react에서 실제쓰는 destruct
//파라미터보낼때부터 분해해버림 value의 별명 지정가능
function showMenu({title: t, items:[it1, it2]}){
    console.log(t, it1, it2)
}
showMenu(menu)
