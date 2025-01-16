const marvel_heroes = ['thor', 'iron-man', 'hulk', 'hawkeye']
const dc = ['flash', 'superman', 'wonder-woman']

// marvel_heroes.push(dc)  // adds whole array as an individual object
// console.log(marvel_heroes)

// const all_heroes = marvel_heroes.concat(dc) //merges two arrays

// console.log('aiefbcsieb')
// console.log(all_heroes)

const new_heroes = [...marvel_heroes, ...dc]
console.log(new_heroes)

const another_arrray = [1,2,3,[4,5,6],7,8,[11,23,45,[14,56,89]]]
const usable_array = another_arrray.flat(Infinity) //you can use infinity ir give depth

console.log(another_arrray)
console.log(usable_array)

console.log(Array.isArray("Vedant"))
console.log(Array.from("Vedant"))

console.log(Array.from({name:'vedant'})) //gives an empty array because it is not defined whether to make array from key or value

let score_1 = 100
let score_2 = 200
let score_3 = 300

console.log(Array.of(score_1,score_2,score_3))
