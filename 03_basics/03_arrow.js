const user = {
    username: 'vedant',
    price: 90,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }
}

user.welcomeMessage()
user.username = 'virat kohli'
user.welcomeMessage()


// function thikena(){
//     let username = "vedant"
//     console.log(this.username)
// }
const thikena = () => {
    let username = "vedant"
    console.log(this)
}

thikena()

// () => {}
    // this is arrow function
    //it can also be saved in a variable ||const new_var = () => {}  

// const addTwo = (num1, num2) => {
//     return num1+num2             this is explicit return
// }
// const addTwo = (num1, num2) => num1+num2
const addTwo = (num1, num2) => (num1+num2)//this is implicit return

//to return object you have to use paranthesis

console.log(addTwo(5,15))

