type Man = {
    manName: string
}

const man: Man = {
    manName: 'john'
}

type Men = Man[]
const men: Men = [{manName: 'neo'}]

type Color = 'red' | 'green' | 'blue'
let color: Color = 'red'
// color = 'yellow'/

type Employee = Man & {//추가시키기 
    job: string
}

const employee: Employee = {
    manName: 'berg',
    job: 'programmer'
}