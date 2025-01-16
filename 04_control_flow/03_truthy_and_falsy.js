const username = ''

if(username){
    console.log("Got user")
}
else{
    console.log("Didn't got user")
}

//falsy values
// 1.false
// 2.0
// 3.-0
// 4.0n(bigint)
// 5.null
// 6.undefined
// 7.NaN
// 8."" empty string

//truthy values
// 1."0" 0 in string
// 2.'false' false in string is also truthy
// 3." " even a space in string
// 4.function(){}
// 5.{} empty objects
// 6.[] even an empty array
// 7.

//Nullish Coalescing Operator (??) it works on null and undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10

 var1 = undefined ?? 15
console.log(val1)
console.log(var1)

//this operator is used to handle cases where output maybe be null or undefined and change the output to given alternative

let price = 100
price>80 ? console.log("more than 80"): console.log('less than 80')
//special syntax to imply yes or no question