// const coding = ['javascript','java','c++','rust','python']

// const values = coding.forEach((item)=>{
//     console.log(item)
// })

// console.log(values)

//last is undefined because for each doesn't return anything

const number = [1,2,3,4,9,7,64,6845]
const nwe = number.filter((num)=>num>4)  //implicit return is given
const nwew = number.filter((num)=>{
    return num>4
})  //explicit return is given 
// explicit return has to be used if scope is opened

console.log(nwe)
console.log(nwew)



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const userBooks = books.filter((bok)=>bok.genre === "History")
  const userBooks1 = books.filter((bok)=> bok.genre === "History" && bok.publish > 1995)

  console.log(userBooks)
  console.log(userBooks1)