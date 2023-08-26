//1

function delayedPromise (value, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(value) 
        }, delay)
    })
}

const promises = [
    delayedPromise('hello', 1000),
    delayedPromise('hola', 2000),
    delayedPromise('ciao', 3000),
    delayedPromise('hallo', 4000),
    delayedPromise('bonjour', 5000),
]
Promise.all(promises).then((res)=>{console.log(res)});

//2

function randomDelay(value,delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(value)
        },delay)
    })
}

const promises2 = [
    randomDelay(1, 1000),
    randomDelay(2, 2000),
    randomDelay(3, 3000),
    randomDelay(4, 4000),
    randomDelay(5, 5000),
]

Promise.race(promises2).then((res)=>{console.log(res)});