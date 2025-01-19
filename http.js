/*
    http Module
    It is built in module in Node.js
    It used for creating the server.
    It is used to send and recieve data over http(Hyper text transfer Protocol)

    To use http module, we have to use require method in commonjs. If we are using ESM then we can use import.

    createServer Method:
    For creating the server createServer method is used.
    It takes two parameters, request and response (req, res) and a callback function.
    In that callback function we can use properties and methods with the help of res parameter.
    
    res.write() ---> used to send the data over http
    res.end() ---> used to end the process, if we don't give res.end() then it will continusly reload the page.

    res.statusCode ---> it is a property, in this we have to set the status code (200)
    res.setheader ---> used to set the Header ("Content-Type", "text/html")
    res.writeHead --> it is used to send the status code and header over http


    The listen() method in Node.js is used to start a server and make it ready to accept incoming connections. It binds the server to a specific port and optionally an IP address or hostname, enabling it to listen for incoming HTTP requests.


*/

const http = require("http");

const ip = "127.0.0.1";
const port = "3000";

// const server = http.createServer((req, res) => {
//   // we can use writeHead() -> will send status code and set Header both
//   res.writeHead(400, { "Content-Type": "text/html" });
//   res.write("Hey from HTTP");
//   //   res.statusCode = 404; // Set HTTP status code to 404
//   //  res.setHeader("Content-Type", "text/html")
//   //   res.write("404, page not found");

//   res.end();
// });

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.statusCode = 200;
    res.write("Welcome to the home page!");
  } else if (req.url === "/about" && req.method === "GET") {
    res.statusCode = 200;
    res.write("About us page");
  } else {
    res.statusCode = 404;
    res.write("404, page not found");
  }
  res.end();
});

server.listen(port, ip, () => {
  console.log(`server running at http://${ip}:${port}/`);
});
