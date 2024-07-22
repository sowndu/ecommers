//console.log("Inside Js")
function callbackTest()
{
    console.log("I am being printed inside callbackTest function.")
}
function callbackTest1()
{
    console.log("I am being printed inside callbackTest1 function.")
}
function add(n1, n2, func)
{
    console.log(n1+n2)
    func()
}
//add(1,2)
let a=1
let b=5
add(a,b,callbackTest1)