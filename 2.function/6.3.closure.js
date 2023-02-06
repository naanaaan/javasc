function makeFn() {
    let userName = 'parker'

    function displayUserName(){
        console.log(userName)
    }

    return displayUserName
}
//이떄 distplayUserName은 사라지지않음 참조하고 있기 때문이다.
let myfn = makeFn()

myfn()