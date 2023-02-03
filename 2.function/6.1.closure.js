//closure 외부에 있는 property를 쓸수 있는 function이다
const age = 16

console.log(sayAge)

{
    let age = 10

    function sayAge(){
        console.log(age)
    }

    let tellAge = function(){
        console.log(age)
    }

    sayAge()
}