const insta_user = new Object()

console.log(insta_user)
insta_user.id = '123'
insta_user.name = 'vedant'
insta_user.isLoggedIn = true

const regular_user = {
    email: "vedanthstudies@gmail.com",
    full_name: {
        first_name: 'vedant',
        middle_name: 'malliarjun',
        last_name: 'hippalgave'
    }

}

console.log(regular_user.full_name)
console.log(regular_user.full_name.last_name)

const obj1 = {1:'a', 2:'b'}
const obj2 = {3:'c', 4:'d'}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2) //merges objects first objects as the target in which all the objects are to be merged
const obj3 = {...obj1,...obj2}
console.log(obj3)

console.log(Object.keys(insta_user))
console.log(Object.values(insta_user))
console.log(Object.entries(insta_user))

console.log(insta_user.hasOwnProperty('id'))

//destructuring object

const course = {
    course_name: "Javascript MasterCourse",
    price: 4000,
    course_instructor: 'Hitesh Choudhary'
}
const{course_instructor: instructor} = course  //in curly braces values to be extracted and after = object name from which it has to be extracted and after the colon the name to be renamed for that particular value can also be given
console.log(instructor)

// {
//     'name':'hitesh',
//     'course_name1': 'big',

// }

