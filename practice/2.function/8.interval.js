let timeId = setInterval(() =>{
    console.log('hi')
}, 1000)

setTimeout(()=>{
    clearInterval(timeId)
    console.log('end')
}, 3000)