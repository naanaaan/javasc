let i = 0
while(i <2) {
    console.log(`while: ${i + 10}`) //`을 쓰면 ${}쓸 수 있음 template literal
    i++
}

do{
    console.log('do')
} while(false)

for(let i = 0; i < 2; i++)
    console.log(`for: ${i}`)
    
for(let i = 0; i < 5; i++){
    if(i >= 2) break
    console.log(i)
}
