//실행하면 property먼저 생성후 실행문실행하기때문에 위에서 sayHi()써도 가능함.
// sayHi()

let userName = 'neo' //neo할당됨 
//jquery에서 주로씀
function sayHi(){
    console.log('Hi', userName)
}

sayHi()

// sayHello()          //이건 안됨 
//react에서 주로 씀
const sayHello = function(){
    console.log('Hello,', userName)
}

sayHello()

//그렇기 때문에 sayHi는 function으로 선언해서 초기값을 바로가지니 위에쓸 수 있지만
// sayHello()는 const로 선언했기때문에 property를 가져오고 그다음에 실행할때 값을 할당하기 때문에
// 위에 쓸수가 없다.