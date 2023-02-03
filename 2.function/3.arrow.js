let add = function(a, b){
    return a + b
}

add = (a, b) => a + b
console.log(add(1,2))

const double = n => 2 * n //리턴생략
console.log(double(2))

const greet = () => console.log('hello') //리턴없음
greet()

add = (a, b) => {
    const result = a + b
    return result
}

console.log(add(1, 2))
