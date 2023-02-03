if(true) {}

if(false) {} else {}

if(undefined) {console.log(1)} //실행안됨 undefined가 false
if(null) {console(1)}
if(0) {console.log(1)}

if(-1) {console.log(1)} //값 나옴

console.log(true ? 1 : 0) //true일때 1 false 0 삼항연산자

let val

switch('boo'){
    case 'bar': val = 'bar'; break  //명령문 2개라 구분할려고 세미콜론넣음
    case 'baz': val = 'baz';
    default: val = 'all right'
}

console.log(val)