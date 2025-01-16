//formed via constructor then it is singleton
//object.create
// if formed via object literals then it is not singleton

const sym = "myKey1"

const user = {
    name: 'vedant',
    "full name": "Vedant Mallikarjun Hippalgave",
    [sym]: "myKey1",
    age: 19,
    location: 'pune',
    isLoggedIn: false,
    Last_Login_Days: ['Monday', 'Tuesday', 'Wednesday','Friday']
}

console.log(user.isLoggedIn)
console.log(user.name)
// console.log(user.full name) this syntax is not possible
console.log(user["full name"])
console.log(user[sym])

user.name = "null"
console.log(user.name)

// Object.freeze(user) //now this object values cannot be changed.

user.greet = function(){
    console.log(`Hii, I am ${this.name}`)
}
console.log(user.greet())