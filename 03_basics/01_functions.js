function giveName(){
    console.log("Vedant")
}

giveName()
function add(num1, num2){
    console.log(`Sum if ${num1} and ${num2} is `+ (num1+num2))
    return num1+num2
}

const result = add(5,6)
add(3,null)

console.log(result)

function loger(username){
    if(username === undefined){
        console.log("Please enter proper name:")
    }
    return `${username} just logged in`
}
console.log(loger('vedant'))
console.log(loger(''))
console.log(loger())

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200,400,500))

// ... is rest and spread operator as per the use case

const user = {
    username: 'vedant',
    price: 69
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user)
handleObject({
    username:'mayur',
    price:453
})