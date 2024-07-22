console.log("hi from app02")

let arr = [5,6,7,8]

/*let ele1 = arr[0]
let ele2 = arr[1]
let ele3 = arr[2]
let ele4 = arr[3]*/

let [ele1,ele2,ele3,ele4] = arr

console.log(ele1,ele2,ele3,ele4)

let course = {
    'topice1':'html',
    'topice2':'css',
    'topice3':'js'
}

let {topice1,topice2,topice3} = course

console.log(topice1,topice2,topice3)