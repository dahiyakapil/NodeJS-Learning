/*
    Path Module
    Path module is built in module in Node.js
    It used for wotk with files and direcotories.
    Windows uses bakcslash '/', and MacOS uses forward '\'

    path.join(): 
        Joins multiple path segments into a single path.
        path.join() concatenates multiple path segments into a single path. This avoids errors like missing or duplicated slashes.
        It adjusts based on the operating system’s path separator.


    path.resolve(): Resolves relative paths to absolute paths.
    path.basename(): Returns the file name from a path.
    path.dirname(): Returns the directory part of a path.
    path.extname(): Returns the file extension.
    path.isAbsolute(): Checks if a path is absolute.
    path.normalize(): Normalizes a path, resolving redundant parts.
    path.parse(): Parses a path into an object with components.
    path.format(): Converts a path object back to a string.
    path.relative(): Gets the relative path from one location to another.



*/

const path = require("path");

console.log(path.join("src", "folder", "one.txt")); // Concatenate path (works cross-platform)
console.log(path.resolve("src", "folder", "one.js")); // Convert relative path to absolute path

console.log(path.basename("src/folder/one.txt", ".txt")); // Returns the last part of the given path, remove file extension
console.log(path.dirname("src/folder/one.txt")); // Returns directory part of the path (without the file name)

console.log(path.extname("src/folder/one.js")); //  returns the extension of the given file path.

console.log(path.parse("src/folder/one.js")); //returns an object whose properties represent different           components of the given path (e.g., root, dir, base, ext, name).

const pathObject = {
  root: "/",
  dir: "/folder/subfolder",
  base: "iron.txt",
  ext: ".txt",
  name: "file",
};

const formattedPath = path.format(pathObject);
console.log(formattedPath);

console.log(path.isAbsolute("C:/Full Stack/All Backend/NodeJS-Learning/src/folder"));

console.log(path.normalize("src//folder//one.js"))