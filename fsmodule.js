/*
    FS Module
    fs module is build in module in node.js used to access the filesystem. 
    fs module has methods to read, write, append, rename, and delete data from a file stored in File System.

    How to use fs module
    Firstly we import the fs module.

    Read File

*/

const fs = require("fs");

// console.log(fs) // will return the entire fs module object, which contains various methods and properties

/*
    Read FIle:

    We have both ways to read the file:
    1. Synchronous
    2. Asynchronous

    readFileSync: This method will read the file in synchronous way. 

    readFile async method: This method will read the file in asynchronous way.
    It has a callback function, in which we have to pass 2 paramters, error and data.
    The data will come in Buffer format so we have to convert the data into string format using toString()

*/

const data = fs.readFileSync("data.txt");
console.log(data.toString());

fs.readFile("data.txt", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data.toString());
  }
});

// Read File with Encoding: UTF8
fs.readFile("data.txt", "utf8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

/*
  Write File

  fs.writeFileSync ---> Synchronous way
  If data.txt file is missing in current directory, node js will create a new directory with same name and then write. There is no need to create a file first and then write.

  fs.writeFile ---> Asynchronous way
  In this method the data is override means it will overrride the previous data. It takes a callback function in which error parameter is passsed.

*/
fs.writeFileSync("data.txt", "next data part");
console.log("*******************************************************");

try {
  fs.writeFileSync("newFile.txt", "New File Content");
  console.log("File created successfully!");
} catch (error) {
  console.log("Error:", error.message);
}

fs.writeFile("data.txt", "async data", "utf8", (error) => {
  if (error) {
    console.log(error);
  }
});

/*
    Append File
    To append in a file, use appendFile or appendFileSync methods of fs. This will not overwrite in file like writeFile and writeFileSync.
  */

fs.appendFile("data.txt", ", This content of append file1", "utf8", (error) => {
  if (error) {
    console.log(error);
  }
});

// using appendFileSync
// fs.appendFileSync("data.txt", ", This content of append file", "utf8", (error) => {
//     if(error) {
//         console.log(error)
//     }
// })

// Check File Stats
fs.stat("data.txt", (error, stats) => {
  if (error) {
    console.log(error);
  } else {
    console.log(stats); // Logs the complete stats object, which includes information about the file.
    console.log(stats.isDirectory()); // Checks if the path refers to a directory and logs true/false.
    console.log(stats.size); // returns size of the file in bytes.
  }
});

// delete file

try {
  fs.unlinkSync("a.txt");
  console.log("file deleted successfully");
} catch (error) {
  console.log(error);
}

try {
  fs.unlink("a2.txt", () => {
    console.log("a2 file deleted");
  });
} catch (error) {
  console.log("Error");
}

module.exports = { fs };
