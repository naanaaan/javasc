let json = `{"name": "john", "age": 30}`
let user = JSON.parse(json)//string을 json으로 바꾸기
console.log(typeof json, typeof user)

json = '{age: 30}'
// JSON.parse(json) 에러남 json이아님

try{
    JSON.parse(json)
} catch{
    console.log('ERROR')
}

try {
    JSON.parse(json)
} catch(e){
    console.log(e.name, '\n', e.message, '\n', e.stack)
}

