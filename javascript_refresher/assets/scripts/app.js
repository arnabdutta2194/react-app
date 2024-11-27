// Export Import Section //

import default_api_key from "./utils.js"
// import { apiKey } from "./utils.js"; // Importing a single variable. 
// import { apiKey as content} from "./utils.js"; // Importing a single variable with another name
// // import { apiKey2 } from "./utils.js" // We can import as many variables as needed
// import { apiKey,apiKey2 } from "./utils.js"; // Importing multiple variables as object
import * as util from "./utils.js";

// console.log(apiKey)
// console.log(apiKey2)
console.log(default_api_key)
console.log(util.apiKey,util.apiKey2)


/* Normal Functions */

// Single function without any parameters
function greet() {
    console.log('Hello World')
}

greet(); // function call without any parameters

// Single function with parameters and defaukt parameters
function greetName(userName,message="Hello") {
    console.log(userName)
    console.log(message)
    return 'Hi I am ' + userName + " " + message
}

greetName('Arnab');
let val = greetName('Arnab','Bye');
console.log(val)




/* Arrow Functions */

// We can also export functions, if it returns a single value
export default (username,message) => {
    console.log('Hello')
    return username + ' ' + message
}


/* Single Parameter Arrow Function */
(username) => {
    console.log(username)
}

/* Single Parameter Arrow Function -- Alternate Bracket not required */
username => {
    console.log(username)
}

/* Multiple Parameter Arrow Function -- Alternate Bracket is  mandatory */
(username,message) => {
    console.log(username,)
}


/* If arrow function has no logic , and simply returns a value, we can omit the curly braces*/
number => {return number * 3}

number => number * 3

/* But the following is invalid if we try to return a JS Object */
number => {age : number}
/* In order for JS to know that a object needs to be returned, the following would suffice */
number => ({age : number})


/* Objects and Classes */

// Objects can contain methodss
let user = {
    name : "Arnab",
    age : 27,
    greet() {
        console.log('Hi my name is '+this.name + ' and my age is ' + this.age)
    }
}

user.greet()

class User {
    constructor(name,age) {
        this.name = name
        this.age = age
    }
    greet() {
        console.log('hi')
    }
}

user = new User('Arnab',27)
console.log(user)
user.greet()

const hobbies = ['A','B','C','D']
console.log(hobbies[1])
hobbies.push('E')
console.log(hobbies)
const index = hobbies.findIndex((item) => {
    return item === 'B'
})

const indexval = hobbies.findIndex((item) =>  item === 'X')

console.log(index)
console.log(indexval)

const lowerHobbies = hobbies.map((item) => item.toLowerCase())
console.log(lowerHobbies)


/* Destructuring */
// Destucturing arrays
const [firstname, lastname] = ["Arnab","Dutta"]
console.log(firstname,lastname)

// Destucturing objects
const {firstname : userName, lastname : lastName} = {
    firstname : 'Arnab',
    lastname : 'Dutta'
}

console.log(userName,lastName)

// Destructuring functions
function storeOrder({id,currency}) {
    localStorage.setItem('id',id)
    localStorage.setItem('currency',currency)
}

/* Spread operator */

// Spread operator for arrays
const newHobbies= ['X','Y']
const mergedHobbies = [...hobbies,...newHobbies]
console.log(mergedHobbies)

// Spread operator for objects


let user2 = {
    name : "Arnab",
    age : 27,
    
}

const extendedUser = {
    isAdmin : false,
    ...user2
}
console.log(extendedUser)



/* Control Structure */

// If Else if Else Loop
// const password = prompt('Enter Your password')

// if (password === "Hello") {
//     console.log(password + 'works')
// }
// else if (password === "hello"){
//     console.log(password + 'works')
// }
// else {
//     console.log("Access Not Granted")
// }

// For loop

for (const hobbies of newHobbies) {
    console.log(hobbies)
}

/* Using Functions as values */


function handleTimeout() {
    console.log('timeout handled')
}

const handleTimeout2 = () => {
    console.log('timeout handled')
}
// When passing function to another function we should not use open and closed parenthesis
// Just using a name, we are passing the function as a value
setTimeout(handleTimeout,200)
setTimeout(handleTimeout2)

setTimeout(() => {
    console.log('timeout handled')
},500)

///Passing functions as values can be done for all kind of functions

/* Nested Functions */

function init(){
    function greet(){
        console.log('Hi')
    }
    greet() //Scope is within the function
    console.log('Excecute init')
}
init()