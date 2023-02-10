async function fn(){
    return 1 //result값이라 생각
}
let f = fn()
console.log(f)//promise가 리턴됨 new Promise할필요없네

f.then(console.log)

//
fn = async function(){
    return Promise.resolve(2)
}
fn().then(console.log)

//
fn = async function(){
    return Promise.reject(new Error(3))
}
fn().catch(e => console.log(e.message))

// async function에만 쓸수있는 키워드 await //비동기작업하다 동기작업필요할떄 awit씀
//awit 쓸려면 무조건 async function써야함
fn = async function(){
    let promise = new Promise((resolve, reject) => 
        setTimeout(() => resolve(4), 1000))
    let result = await promise //promise 작업 끝나길 기다림 끝나고 result에 값 할당
    console.log(result)
}
fn()
//
class Waiter {
    async order(){
        return await Promise.resolve('짜장면')
    }
}
new Waiter().order().then(console.log)