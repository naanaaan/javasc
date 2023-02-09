class CoffeMachine {
    waterAmount = 0
    constructor(voltage){
        this.voltage = voltage
    }
}

console.log(typeof CoffeMachine)
console.log(Object.keys(CoffeMachine))
console.log(Object.keys(CoffeMachine.prototype))

let machine = new CoffeMachine(220)
console.log(machine)
console.log(Object.keys(machine))

CoffeMachine = class{
    _waterAmount

    get waterAmount(){
        return this._waterAmount + 100
    }

    set waterAmount(waterAmount){
        this._waterAmount = 2 * waterAmount
    }
}

console.log(CoffeMachine.prototype)

machine = new CoffeMachine()
console.log(machine)

machine.waterAmount = 1
console.log(machine.waterAmount)
machine._waterAmount = 11
console.log(machine._waterAmount)