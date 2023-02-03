/*
1.calculate.js를 callback 으로 refactoring 하라
연산을 calback으로 처리한다
*/
let operator1 = function(param1, param2){
    return param1- param2
}

let operator2 = function(param1, param2){
    return param1/ param2
}

let operator3 = function(param1, param2){
    return param1 *param2
}

let calculate = function(param1, param2, op='*'){
    switch(op){
        case '-' : return operator1(param1, param2); break
        case '/' : return operator2(param1, param2); break
        case '*' : operator3(param1, param2)
    }
}
console.log(calculate(2, 2, '/'))



