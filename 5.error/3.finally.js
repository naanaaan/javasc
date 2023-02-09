function laugh(cnt){
    if(cnt <= 0 || Math.trunc(cnt) != cnt)//음수 실수 거름
        throw new Error('반복 횟수는 자연수이어야 합니다.')
    let phrase = ''
    for(let i = 0; i < cnt; i++) phrase += 'ha'

    return phrase
}

let diff
let start = Date.now()

try {
    console.log(laugh(3))
    laugh(3.1)
} catch(e){
    console.log(e.message)
} finally{
    diff = Date.now() - start //작업시간
}

console.log(`작동 시간: ${diff}ms.`)