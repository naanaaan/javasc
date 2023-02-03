const greeting = 'hello'

function say(userName){
    console.log(greeting, userName)//userName local scope say콜될때 생성
}

say('john')
//say는 let으로 설정한게아니기때문에 le에서 say는 초기값 null이아니라
//function을 가진다.