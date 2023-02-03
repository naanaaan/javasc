let foo = "I am a string."
foo = 'So am I'
foo = `back tick`

foo = 'He said, "javascript is awesome"'
foo = "He said, \"javascript is awesome\""

foo = 1
foo  =1.0

console.log(1 / 0)
console.log('a' / 1)

foo = 1
console.log(isFinite(foo))
foo = 'a'
console.log(isFinite(foo))

foo = '1'
console.log(parseInt(foo))
console.log(parseInt(foo) + 1)

foo = 'a'
foo = '100px'
foo = '+1'
foo = '-1'
foo = '123456-7890123'
console.log(parseInt(foo))

foo = '1.6'
console.log(parseInt(foo))
console.log(parseFloat(foo))

let id = Symbol('id')
console.log(typeof id)
val = 1
val = String(val)
console.log(typeof val)

val = '6' / '2'
// console.log(VideoColorSpace)

val = false / true
console.log(val)

val = '1'
val = Number(val)
console.log(typeof val)

console.log(Number('1'), Number(true))
console.log(Number(' '), Number(''), Number(null), Number(false))
console.log(Number('a'), Number(undefined), Number(NaN))

console.log(Boolean(-1), Boolean('a'), Boolean('0'), Boolean(' '))
console.log(Boolean(0), Boolean(''), Boolean(null), Boolean(undefined), Boolean(NaN))