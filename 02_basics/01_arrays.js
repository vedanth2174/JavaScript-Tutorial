//array

const myArray = [0,1,2,3,4,6]
//array can also have different datatypes
//array are also resizable

const heroes = ['iron-man','spiderman','thor','captain-america']

heroes.push('black-widow')
myArray.push(9)
myArray.unshift(3) //adds value at the start
myArray.shift() 
console.log(myArray)
console.log(heroes)
console.log( myArray.includes(3))
console.log(typeof myArray.includes(3))

const str = heroes.join()
console.log(str)

console.log(heroes)
console.log(heroes.slice(0,2))
console.log(heroes)
console.log(heroes.splice(0,2)) //removes these values from the array
console.log(heroes)