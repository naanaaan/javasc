/*
산술 연산 함수를 만든다.

1. (값1, 값2, 연산자)가 parameter 이다. ex)'값1'
2. parameter value 들은 string type 이다.
3. 연산자는 -, *, /로 한정한다.
4. client가 연산자를 안 정핫면, * 를 연산자로 쓴다.
5. 연산 결과값을 return 한다.
*/
// let result
// const calculate = function(param1, param2, operator){
//         switch(operator){
//             case '-' :   result = parseInt(param1 - param2)
//             case '/' :   result = parseInt(param1 / param2)
//             default  :   result = parseInt(param1 * param2)
//     }
//     return reus
// }
// calculate(14, 2, '/')
//답
let calculate = function(a, b, op='*'){
    let result
    
    switch(op){
        case '-' : result = a - b; break
        case '*' : result = a * b; break
        case '/' : result = a / b;
    }

    return result
}

console.log(calculate('1', '2', '-'))
console.log(calculate('2', '2'))