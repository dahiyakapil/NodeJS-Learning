console.log("Hey from add.js file");
const os = require("os")
// import os from "os"

// export function sum(a, b){
//     return a + b;
// }

 function sum(a, b) {
  return a + b;
}

// using commonjs module we are exporting the file
module.exports = {sum}




/*
    will return the absolute path of the file in which the code is running. 
    __filename is a global variable in Node.js that always contains the full path of the current module (file).
*/

// console.log(__filename);

// console.log(__dirname) // will return the absolute directory path of the folder containing the file where the code is running.

/*

    Key Differences Between __filename and __dirname:
    __filename: Gives the absolute path to the file itself (including the file name).
    Example: /home/user/project/example.js
    __dirname: Gives the absolute path of the directory containing the file.
    Example: /home/user/project

*/

// It will return the entire `process` object containing information about the current Node.js process.
console.log(process);

// It will return the version of Node.js being used, e.g., "v18.0.0".
console.log(process.version);

// It will return an object containing all the environment variables of the current process.
console.log(process.env);

// It will return the absolute path to the Node.js executable, e.g., "/usr/local/bin/node".
console.log(process.execPath);

// It will return the architecture of the processor, e.g., "x64" or "arm".
console.log(process.arch);

// It will return the current working directory of the Node.js process.
console.log(process.cwd);

// It will return the build configuration for the current Node.js process.
console.log(process.config);

// It will return a reference to the `process.nextTick` function, which is used to schedule a callback in the next event loop.
console.log(process.nextTick);

// It will return the value of the `PORT` environment variable, or `undefined` if it is not set.
console.log(process.env.PORT);

// It will return an object with memory usage statistics, such as heap and RSS (Resident Set Size).
console.log(process.memoryUsage());




// Add property to global
global.name = "kapil";
console.log(global.name)
console.log(global)

// Nodejs OS modules


console.log("-----------------------------------OS Module--------------------------------")
console.log(os)

console.log(os.arch()) // returns the architecture of operating system:  x64
console.log(os.cpus()) // This method returns an array of objects having information about each CPU Core.
console.log(os.totalmem())// os.totalmem() method is used to check total memory.
console.log(os.totalmem()/1073741824 + " GB") // Total Memory is the actual size of RAM : 15.855 GB
console.log(os.freemem()) // os.freemem() method is used to check free memory out of total memory.
console.log(os.freemem()/1073741824 + " GB")


console.log("--------------------------------- Information related to network ---------------------")
console.log(os.networkInterfaces()) // method returns an object containing network information. That includes mac id, ip.
console.log(os.platform()) // method returns a string containing platform of operating system: win32
console.log(os.type()) // method returns a string containing name of operating system: Windows_NT
console.log(os.uptime()+" secs");
console.log((os.uptime()/60)+ " mins");
console.log((os.uptime()/3600)+ " hours");

console.log(os.userInfo()) // method returns an object with information of user like, uid, gid, username, home directory