//For each loop

const coding = ['javascript','java','c++','rust','python']

coding.forEach(element => {
    console.log(element)
});

coding.forEach(function (element){        //there is no name cuz it is call back functiomn
    console.log(element)
    
})


//()=>{}  this is arrow function
// also for each gets element index and array

coding.forEach((element, index, arr)=>{
    console.log(element, index, arr)
})


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item)=>{
    console.log(`${item.languageName} and file name is ${item.languageFileName}`)
})