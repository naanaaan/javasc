const age = 16

function init(){
    let age = 10

    function sayAge(){
        console.log(age)
    }

    let tellAge = function(){
        console.log(age)
    }
    //call될 때 le가생성됨
    sayAge()
    tellAge()
}

init()
