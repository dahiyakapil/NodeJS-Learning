console.log("Hello from Node.js");
let a = 10;
let b = 20;
console.log(a + b);

// Global object in node... different from the Browser window
console.log(global)
console.log(this) // returns undefined : when we use ESM(ECMA Script Module) type: "module" , and when we use the commonjs then it returns the empty object {}
console.log(globalThis) // this will refers to the global object

console.log(global === globalThis) // true