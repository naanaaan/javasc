let a = 1

{
    console.log(a)
}

{   // local scope 벗어나면 사라짐 local안에선 local > global
    let a = 2
    console.log(a)
}

console.log(a) 
//le = lexcial environment
//{}은 새로은 lexical enviroment가 생성됨