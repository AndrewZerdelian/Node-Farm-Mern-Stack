const { error } = require("console");
const fs = require("fs"); //same thing
const http = require("http");
const url = require("url");
const replaceTemplate = require("./moduels/replaceTemplate");

/////////////////////////////////////////////WEB API ////////////////////////////////////

const data = fs.readFileSync("./dev-data/data.json", "utf-8");
const Template_OverView = fs.readFileSync(
  `${__dirname}/templates/tamplet-overview.html`,
  "utf-8"
);
const Template_Product = fs.readFileSync(
  `${__dirname}/templates/tamplet-product.html`,
  "utf-8"
);
const Template_Card = fs.readFileSync(
  `${__dirname}/templates/tamplet-card.html`,
  "utf-8"
);
const Response = JSON.parse(data);

/** 
 * Explanation:
Modules: Importing required modules (fs for file system, http for creating server, url for parsing URLs).
Reading Files: Reading the JSON data and HTML templates synchronously using fs.readFileSync.
Parsing Data: Parsing the JSON data into a JavaScript object.
 */

////////////////////////////CREATING THE SERVER////////////////////////////////////
const Server = http.createServer((request, response) => {
  //console.log(request.url);
  const { query, pathname } = url.parse(request.url, true);
  //const Path = request.url;

  if (pathname === "/" || pathname === "/Home") {
    response.writeHead(200, { "Content-type": "text/html" });
    const cardshtml = Response.map((item) =>
      replaceTemplate(Template_Card, item)
    ).join("");
    const output = Template_OverView.replace(/{%product_cards%}/g, cardshtml);
    response.end(output);
    //console.log(cardshtml);
  } else if (pathname === "/Product") {
    response.writeHead(200, { "Content-type": "text/html" });
    const product = Response[query.id];
    const output = replaceTemplate(Template_Product, product);
    response.end(output);
  } else if (pathname === "/API") {
    response.writeHead(200, { "Content-type": "application/json" });
    response.end(data);
    //response.end(JSON.stringify(Response)); same as the line above
  } else {
    // If the path doesn't match any of the above, return a 404 page
    response.writeHead(404, { "Content-type": "text/html" });
    response.end("<h1>This is the 404 Page</h1>");
  }

  // Log the requested URL to the console
  console.log(request.url);
});

// Start the server and listen on port 8000 at localhost
Server.listen(8000, `127.0.0.1`, function () {
  console.log("Server is running on port 8000");
});

/**Explanation:
Server Creation: Using http.createServer to create a server.
Request Handling: Parsing the URL and handling different paths:
Home Page: If the path is / or /Home, it serves an overview page with all products.
Product Page: If the path is /Product, it serves a detailed product page.
API: If the path is /API, it serves the JSON data.
404 Page: For any other paths, it serves a 404 error page.
Response: Using response.writeHead to set response headers and response.end to send the response.
Logging: Logging the requested URL to the console.
Server Listening: Starting the server on port 8000 and logging a message to the console when the server is running. */

/**
 * What You'll Use in Real Projects
Key Takeaways:
Modules: Understanding how to use Node.js core modules like fs, http, and url is crucial.
Reading Files: Reading and parsing data from files, especially JSON and HTML files, is a common task.
Creating a Server: Setting up an HTTP server and handling different routes/paths is fundamental for backend development.
Template Replacement: Dynamically generating HTML content based on data is a frequent requirement.
Response Handling: Sending appropriate HTTP responses (HTML, JSON, etc.) and status codes is essential.
Error Handling: Providing a 404 error page or other error handling mechanisms is important for robust applications.
In real-life projects, you'll often:

Set up servers to handle client requests.
Read and process data from databases or files.
Dynamically generate and serve HTML content.
Manage routes for different endpoints.
Implement proper error handling.
These basics will form the foundation upon which you'll build more complex applications as you gain more experience. Keep practicing, and don't get discouraged—every programmer started from the beginning, just like you!
 */
