class CoffeMachine {
    #waterAmount

    get waterAmount(){
        return this.#waterAmount + 100
    }

    set waterAmount(waterAmount){
        this.#waterAmount = 2 * waterAmount
    }
}

console.log(CoffeMachine.prototype)

let machine = new CoffeMachine()
console.log(machine)//#안보임

machine.waterAmount = 1
console.log(machine.waterAmount)

// machine.#waterAmount = 1 에러