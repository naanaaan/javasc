let timeId = setInterval(() => console.log('trick'), 1000)

setTimeout(() =>{
    clearInterval(timeId)
    console.log(stop)
}, 3000)