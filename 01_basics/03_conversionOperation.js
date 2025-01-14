let score = undefined

let numScore = Number(score)

console.log(typeof score)
console.log(typeof numScore)
console.log(numScore)

// conversion to numbers
// "33" = 33
// "33fs" = NaN
// null = 0
// undefined = NaN
// true = 1
// false = 0

let isLoggednIn = 1

let convertedvalue = Boolean(isLoggednIn)
console.log(convertedvalue)
//1 to boolean is true
//"any string " is true
//"" empty string is false

//*******Operations**************

let value = 3

let negValue1 = -value

console.log(negValue1)
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/2)
console.log(2**2)

console.log("1"+2)
console.log(1+"2")
console.log(3+1+"2"+2+7)

console.log(+true)
// console.log(true+)

let gameCounter = 100
gameCounter++;
console.log(gameCounter)

// If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.

// If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.