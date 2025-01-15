//Dates

let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)

let myCreatedDate = new Date(2024,6,17)
console.log(myCreatedDate.toDateString())

//months start from 0 to 11

let myTimeStamp = Date.now()
// console.log(myTimeStamp )
// console.log(myCreatedDate.getTime())

console.log(Math.floor(myTimeStamp) )
console.log(Math.floor(myTimeStamp/1000) )

myDate.toLocaleDateString('default',{
    weekday: "long",
    timeZone: 'GMT 5:30'
})
