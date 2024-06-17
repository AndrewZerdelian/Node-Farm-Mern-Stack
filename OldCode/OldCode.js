//require('./modules/replaceTemplate');

//import { readFileSync } from "fs";

//const Greetings = "Hello MDAFKAAS BACKEND ";
//console.log(Greetings);

//const textInput = fs.readFileSync("./txt/input.txt", "utf-8"); // how to read files in ASYNC

//console.log(textInput);

////////////////////How To Read and Write in Node.js////////////////////////

//const textOutput = `THIS IS WHAT WE KNOW ABOUT THE AvoCAdo: ${textInput}. \n Createddd on ${Date.now()}`;

//fs.writeFileSync("./txt/output.txt", textOutput);

//console.log("FileWriiten");

////////////////////////////////////////SYNC & ASYNC //////////////////////////////////////////
///////////OLD WAY CALLBACK HELL////////////////////////////////////////
// fs.readFile("./txt/start.txt", "utf-8", (Error, data1) => {
//   // it reads the "./txt/start.txt", "utf-8", first //then in find there is a call back (Error, data1) => {} so it goes to read it
//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (Error, data2) => {
//     console.log(data2);
//     fs.readFile("./txt/append.txt", "utf-8", function (Error, data3) {
//       // old function way to write works
//       if (Error) {
//         console.log(Error);
//       } else {
//         console.log(data3);
//         fs.writeFile(
//           `./txt/final.txt`,
//           `${data2} \n ${data3}`,
//           "utf-8",
//           (error) => {
//             console.log(`Yor file is ready `);
//           }
//         );
//       }
//     });
//   });
// });
// console.log("Reading the file in a ASYNCRONACE WAY");

///////////////////////////////////////////////////////////SERVER/////////////////////////////////////////////////////////////////
// Import the http module from Node.js
//const http = require("http");
// const url = require("url");  // This line is commented out and not used in the code

// Create an HTTP server
// const Server = http.createServer((request, response) => {
// The callback function that handles incoming requests
// Get the URL path from the request
//   const Path = request.url;

// Route the request based on the URL path
//   if (Path === "/" || Path === "/Home") {
//     response.end("<h1>This is the Home Page</h1>");
//   } else if (Path === "/Products") {
//     response.end("This is the Products Page");
//   } else if (Path === "/About") {
//     response.end("This is the About Page");
//   } else if (Path === "/Contact") {
//     response.end("This is the Contact Page");
//   } else if (Path === "/Login") {
//     response.end("This is the Login Page");
//   } else if (Path === "/SignUp") {
//     response.end("This is the SignUp Page");
//   } else if (Path === "/OmarKhaled") {
//     response.end("<h1> Ezaiak ya Omar :D </h1>");
//   } else if (Path === "/AndrewZerdelian") {
//     response.end("<h1> Ezaiak ya Andrew :D </h1>");
//   } else {
//     // If the path doesn't match any of the above, return a 404 page
//     response.writeHead(404, { "Content-type": "text/html" });
//     response.end("<h1>This is the 404 Page</h1>");
//   }

//   // Log the requested URL to the console
//   console.log(request.url);
// });

// // Start the server and listen on port 8000 at localhost
// Server.listen(8000, `127.0.0.1`, function () {
//   console.log("Server is running on port 8000");
// });
