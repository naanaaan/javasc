let range = {
    from: 1,
    to: 3,

    [Symbol.iterator](){
        this.current = this.from
        return this
    },
        next() {
            if(this.current <= this.to)
            return{
                done: false,
                value: this.current++
            }
            else
            return{
                done: true
            }
        }
    }
// for of 루프는 순회를 시작하기 전, [Symbol.iterator]() 메소드를 
// 호출하여 이터레이터 객체를 얻은 후, 
// 순차적으로 next() 메소드를 호출하면서 하나씩 순회하는 것이다
for(let num of range)
    console.log(num)
//위코드 더러워 개선된게 제너레이터
//제너레이터의 return은 yield이다
function* generator(){
    let val = 1
    while(val <= 3) yield val++
}// function*, yield필수

for(let num of generator())//코드상에는 function했찌만 실제론 객체리턴
console.log(num)
let g = generator()
console.log(g, typeof g) 


//
function* gen(){
    yield 1
    yield ['a', 'b']
    yield function(){}
}

for(let val of gen())
console.log(val)
//*은 쪼갠다 spread
function* gen2(){
    yield* generator()
    yield* ['a', 'b']
    yield 9
}

for(let val of gen2())
console.log(val)