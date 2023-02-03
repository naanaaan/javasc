let val = 1 + 2 * 3 / 2
console.log(val, 5 % 2, 4 ** 2, 4 ** (1/2)) //4 ** 2 4의 2승 (1/2)루트

let i = 1
console.log(++i, i++) //++I 2가되기때문에 2 2

let foo = 'hello'
let bar = 'world'
console.log(foo + ' ' + bar)
console.log(1 + '2', '1' + '2')

console.log(1 + +'2') //+ +쓰면 number로 변경

//boolean은 피연산자가 boolean이다.
//마지막으로 읽은 값을 리턴한다.
console.log(1 || 0, 0 || 1) //true || false이다. 앞값이 false면 뒤값 읽고 true면 뒤값 안읽음
console.log(1 && 0, 0 && 1)
console.log(1 && 2, 2 && 1) //true니 뒤에 읽어봄 그래서 2, 2읽고 false나올까봐 1읽고 리턴

// if(foo == true) a논리  자바코드
// foo && A논리     자바스크립트코드
//bal = baz || createBar()

console.log()
let c = 3 - (a = 1 + 2)
console.log(c)

let d = 2
d *= 2
console.log(d)

//비교연산자는 return값이 boolean
console.log()
console.log('2' > 1, '01' == 1, false == 0, '0' == 0, '' == false) //알아서 number타입으로 바꿔줌
console.log(true > 1) //boolean이 number로 변환됨

console.log(1 == '1', 1 != '1')   // equivalent
console.log(1 === '1', 1 !== '1') //데이터타입까지 비교한다. identical

console.log('z' > 'a', 'ac' > 'ab', 'bee' > 'be', 'a' > 'A')

console.log(null > 0, null >= 0, null == 0)//null 0인데 ==0이라하니까 false나옴 예외임
console.log(undefined > 0, undefined >=0, undefined ==0) //요건 다 false
console.log(NaN > 0, NaN >= 0, NaN == 0) //다 false  null만 예외

console.log(undefined == undefined, null == null, NaN == NaN) // true true false

a == b //true
a == 1 //false
1 == a //false
