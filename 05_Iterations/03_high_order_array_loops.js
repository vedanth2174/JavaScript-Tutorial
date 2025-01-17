// for of

//["","",""]
//[{},{},{}]

const arr = [1,2,3,4,5]

for (const i of arr) {
    console.log(i)
}

const greetings = "Hello, I am Vedant"

for (const greet of greetings) {
    console.log(greet)
}

//maps

const map = new Map() //collection of key-value pairs
map.set('IN','India')
map.set('USA','United States of America')
map.set('IN','India') //stores only unique values
console.log(map)

for (const j of map) {
    console.log(j) //prints whole objects
}
for (const [key,value] of map) {
    console.log(key)
    console.log(value)
}


// let myObj = {
//     name:'vedant',
//     contact: 9172870354,
//     email:'vedanthstudies@gmail.com'
// }
// for (const i of myObj) {
//     console.log(i)
// }

//this object is not iteratable

//for iterating objects use for-in loop

const myObj = {
    one:'iron-man',
    two:'hulk',
    three:'thor'
}

for (const key in myObj) {
    console.log(`${key} has value `+myObj[key])
}

const hava = [1,2,3,4,5]
for (const key in hava) {
    console.log(`${key} has value `+hava[key])
}

//for-in also works for array

