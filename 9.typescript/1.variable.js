let msg = 'hello'; //typescript는 string타입
// msg = 1 자바스크립트와 타입스크립트차이는 동적 정적 타입이 정적 static
//장점 버그 막을 수 있음 하지만 코드가 난잡해짐
let val = 1;
let nullableStr = null; //union type
nullableStr = 'Hi';
// nullableStr = undefined 
let undefinedOrNumber;
undefinedOrNumber = 110;
undefinedOrNumber = undefined;
let numberOrStringOrNull = null;
numberOrStringOrNull = 1;
numberOrStringOrNull = 'Bye';
numberOrStringOrNull = null;
let isCompleted = true;
isCompleted = false;
// isCompleted = 0
let anyValue = null; //ㅇ러면 자바스크립트처럼 가능 
anyValue = undefined;
anyValue = 1;
anyValue = 'hello';
let a = 1;
let b = 'b';
let c = true;

