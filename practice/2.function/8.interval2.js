let timeId = setInterval(()=> console.log('hio'), 1000)

setTimeout(()=>{
    clearInterval(timeId)
    console.log('end')
}, 3000)