function abc()
{
    console.log("I am inside abc")
}

console.log("Hello")
//setTimeout(abc,1000)
let interval = setInterval(abc,1000)
console.log("Hi")

function clear()
{
    clearInterval(interval)
}
setTimeout(clear,3000)