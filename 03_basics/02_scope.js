//    var c = 34
let a = 1000
if(true){
    let a = 10
    console.log(a+"block scope")

}


console.log(a+"global scope")


//var is not used because it does not differentiate between global and local scope4

function one(){
    const username = 'vedant'
    function two(){
        const website = 'www.youtube.com'
        console.log(username)
    }

    two()

}
one()

console.log(add1(10)) //here we can access function before declaring

function add1(num1){
    return num1+10
}

// console.log(add2(25))   //here we cannot access function before declaring

const add2 = function (num1){
    return num1+15
}

console.log(add2(25))

