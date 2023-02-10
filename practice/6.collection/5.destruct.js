let arr = ['ilya', 'kantor']
let [firstName, lastName]= arr
console.log(firstName, lastName)

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

arr = s.split(' ')
console.log(arr)

let user = {
    userName: 'oscar',
    age: 6
}
let entries = Object.entries(user)
console.log(entries)

for(let [key, val] of Object.entries(user))
console.log(key, val)

let map = new Map([
    ['userName', 'oscar'],
    ['age', 6]
])
for(let [key, val] of map){
    console.log(key, val)
}

let [x, y, ...rest] = [1, 2, 3, 4]
console.log(x, y, rest)

let [x2, y2=10] =[1]
console.log(x2, y2)

let options = {
    title: 'menu',
    height: 100,
    width: 200
}
console.log(options)
let{title, height, width} = options
console.log(title, height, width);

({title, width, height} = options)
console.log(title, height, width)

let {width: w, height: h} = options
console.log(w, h)

let {title: t, ...other} = options
console.log(t, other)

let {title: subject, wide=10} = options
console.log(subject, wide)

let bread = {
    size: {
        width: 100,
        height: 200
    },
    items: ['cake', 'donut'],
    extra: true
}

// let {size, items} = bread 
// console.log(size, items)

let {
    size: {
        width: w2,
        height: h2
    },
    items: [item1, item2],
} = bread
console.log(w2, h2, item1, item2)

let menu = {
    title: 'menu',
    items: ['list', 'add'],
    expired: 10
}

function showMenu({title: t, items:[it1, it2]}){
    console.log(t, it1, it2)
}
showMenu(menu)
