//closure 외부에 있는 property를 쓸수 있는 function이다
const age = 16

console.log(sayAge)

{
    let age = 10
    //이 function은 객체이며 주소값을 가지고 있따.
    function sayAge(){
        console.log(age)
    }
    //tellAge=fn에서 fn의 주소값을 가지고 데이터를 가져온다.
    //fn객체의 le객체를 closure이라고 한다.
    //age변수를 가지고있지 않지만 부모객체에 접근하여 age변수를 가져오는 객체를 말한다.
    let tellAge = function(){
        console.log(age)
    }

    sayAge()
    tellAge()
}

sayAge()
