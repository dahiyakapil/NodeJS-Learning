// import {sum} from "./add.js"

const{ sum }= require("./add")

console.log(sum(1, 2));

console.log("Hello from Node.js");
let a = 10;
let b = 20;
console.log(a + b);

// Global object in node... different from the Browser window
console.log(global)
console.log(this) // returns undefined : when we use ESM(ECMA Script Module) type: "module" , and when we use the commonjs then it returns the empty object {}
console.log(globalThis) // this will refers to the global object

console.log(global === globalThis) // true

// x = 45; // eferenceError: x is not defined     as we are exexcuting the code in ES module if we execute the same code in commonjs module this not throw an error. Because commonjs runs the code in non-strict mode. and the global varibal will attact to the global object
// console.log(x)


console.log(module.exports) // returns empty object