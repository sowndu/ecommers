console.log('hi')
console.log('hi')
console.log('hi')
let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('db call sucessful')
        resolve(25)
    },2000)
})

let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('db call notsucessful')
       reject(new Error("DB Backend Failure"))
    },4000)
})

//let p1 = db call   -> this is a data base func
console.log('hi')
console.log(p1)
p1
.then((response)=>{   //callback func
    console.log('bye')
})
.catch((error)=>{  //reject
    console.log(error)
})

p2
.then((response)=>{   //callback func
    console.log('bye')
})
.catch((error)=>{
    console.log(error)
})

console.log('hi')