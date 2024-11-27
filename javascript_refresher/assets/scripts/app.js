import default_api_key from "./utils.js"
// import { apiKey } from "./utils.js";
// import { apiKey as content} from "./utils.js";
// // import { apiKey2 } from "./utils.js"
// import { apiKey,apiKey2 } from "./utils.js";
import * as util from "./utils.js";

// console.log(apiKey)
// console.log(apiKey2)
console.log(default_api_key)
console.log(util.apiKey,util.apiKey2)


function greet() {
    console.log('Hello World')
}

greet();

function greetName(userName,message="Hello") {
    console.log(userName)
    console.log(message)
    return 'Hi I am ' + userName + " " + message
}

greetName('Arnab');
let val = greetName('Arnab','Bye');
console.log(val)




/* Arrow Functions */

// export default function() {
//     console.log('Hello')
// }

export default (username,message) => {
    console.log('Hello')
    return username + ' ' + message
}


