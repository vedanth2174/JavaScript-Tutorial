const promise1 = new Promise(function(resolve, reject){
    //DO async task
    //DB calls, cryptography, network
    setTimeout(()=>{
        console.log('Async task is complete')
        resolve()
    }, 1000)
})

promise1.then(()=>{
    console.log('Promise consumed')
})

new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('Async 2 resolved')
        resolve()
    }, 1000)
}).then(()=>{
    console.log("Task 2 completed")
})

const promise3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({
            username:"vedant2174",
            name:"Vedant Mallikarjun Hippalgave",
            contact:"9172870354"
            
        })
    }, 1000)
})
promise3.then((obj)=>{
    console.log(obj)
})


const promise4 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = false
        if(!error){
            resolve({username:"vedant2174", password:"ved#1117"})
        }else{
            reject('ERROR in promise 4')
        }
    }, 1000)
})
.then((obj)=>{

    console.log(obj)
    return obj.username
})
.then((username)=>{
    console.log(username)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log("Either promise is done or not")
})


const promise5 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({username:"vedant2174", password:"ved#1117"})
        }else{
            reject('ERROR in promise 5')
        }
    }, 1000)
})
async function consumePromise5(){
    try{const response = await promise5
    console.log(response)}
    catch(error){
        console.log(error)
    }
}

consumePromise5()

async function getAllUsers(){
    try{
        const response = await fetch('https://api.github.com/users/Vedanth2174')
        // console.log(response)
        const data = await response.json() //we write await to those takss which may take time
        console.log(data)
    }
    catch(error){
        console.log(error)
    }
}

getAllUsers()

// doing above task using then catch method

new Promise((resolve, reject)=>{
    let error = false
    if(!error){
        resolve(fetch('https://api.github.com/users/Vedanth2174'))
    }else{
        reject('error')
    }
})
.then((data)=>{
    const user = data.json()
    console.log(user)
})
.catch  ((error)=>{
    console.log(error)
})

fetch('https://api.github.com/users/Vedanth2174')
.then((response)=>{
    console.log(response.json())
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})