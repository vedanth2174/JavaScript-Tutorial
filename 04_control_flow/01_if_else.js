// if(condition:true){

// }
// else if(consition:true){
    
// }
// else if(consition:true){
    
// }
// else {
    
// }

// if any condition is true that block will be executed and if none of the condition is executed then else block is executed

const isLoggedIn = true
if(isLoggedIn){
    console.log(`Hiii`)
}

//comparators  ==,<,>,=>,=<,===,!=
//=== also check whether the datatype is equal

let temperature = 45

if(temperature>50){
    console.log(`It's hot`)
}
else{
    console.log(`It's not that hot`)
}


const balance = 500

if(balance>=500){
    if(balance<600){
        console.log(`Balance is between 500 and 600`)
    }
}

//&& can be used to apply more than one conditions

if(balance>=500 && balance<600){
    console.log("Hiiiii")
}

//  "||" is used as or means one of the conditions must be true