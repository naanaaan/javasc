let foo = "I am a string." //""을 쓰며 String타입이된다.
foo = 'So am I '
foo = `back tick`  //다 String타입 취향차이

foo = 'He said, "javascript is awesome"' //""로인용문을쓸려면 ''로 String타입으로 쓰고 ""로 인용문해야함
foo = "He said, \"javascript is awesome\"" // 아니면 \써야함

// number타입
foo = 1
foo = 1.0

console.log(1 / 0) //결과 Infinity 에러아님 값임 무한
console.log('a' / 1) //결과 Nan 에러아님 값 Not a Number 숫자가 아니다. 메세지 아님.-

foo = 1
console.log(isFinite(foo))//변수의 데이터타입을 조사하는 function 숫자타입
foo = 'a' //a값을 넣었기때문에 String 타입이고 이것을 Duck typing
console.log(isFinite(foo))

foo = '1'
console.log(parseInt(foo)) //String을 넘버로 바꿈 parseInt함수에 마우스댔을때 |는 or이라는 뜻 nuber는 리턴값이 number
console.log(parseInt(foo) + 1)

foo = 'a'
foo = '100px'
foo = '+1'
foo = '-1'
foo = '123456-7890123' //앞에 123456만 parse함
console.log(parseInt(foo)) //'a'일땐 NaN인데 100px는 가능함 태생이 브라우저이기때문

foo = '1.6'
console.log(parseInt(foo)) //parseInt로는 내림처리함
console.log(parseFloat(foo))

let a = Infinity * 2
let b = NaN * 2

a = Infinity * NaN
console.log(a, b)

foo = 1n //그냥 int보다 비트를 더 많이쓰는 int라고 보면 됨 big int 16자리이상?

const okay = true
const fail = false

let val = null

let val2
console.log(val2) //변수값이 정의되징 않음 undefined 메세지아니고 값임
val2 = undefined

let id = Symbol('id') //Sysmbol(값 )을 Symbol타입을 전환
console.log(typeof id) //타입확인 sysmbol은 객체이다
val = 1
val = String(val) //String타입을 리턴한다.
console.log(typeof val) //typeof의 return값은 String

val = '6' / '2'
// console.log(VideoColorSpace) //왜 에러뜨징

val = false / true
console.log(val) // 0 /1 로 바낌

val = '1'
val = Number(val)
console.log(typeof val)

console.log(Number('1'), Number(true))
console.log(Number(' '), Number(''), Number(null), Number(false))
console.log(Number('a'), Number(undefined), Number(NaN))

//아래는 많이 쓰니 기억하자.
console.log(Boolean(-1), Boolean('a'), Boolean('0'), Boolean(' ')) //값이 있으니 true이다.
console.log(Boolean(0), Boolean(''), Boolean(null), Boolean(undefined), Boolean(NaN))
