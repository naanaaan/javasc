let calculate = function(a, b, op='*'){
    let result

    switch(op){
        case '-' : result = a - b; break
        case '*' : result = a * b; break
        case '/' : result = a / b; 
    }
    return result 
}

console.log(calculate(2, 2))