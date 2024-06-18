//1. Importing and Exporting Packages and Modules
//In Node.js, you use the require function to import modules. Here's how your code imports different modules:

const fs = require("fs"); // File system module for reading and writing files
const http = require("http"); // HTTP module for creating server
const url = require("url"); // URL module for parsing URL
const replaceTemplate = require("./moduels/replaceTemplate"); // Custom module for replacing template variables
const { default: slugify } = require("slugify"); // Slugify module for generating URL-friendly strings

//Core Modules: fs, http, and url are core Node.js modules, meaning they come with Node.js and don't require separate installation.
//Third-Party Modules: slugify is a third-party module that you must install via npm (npm install slugify).
//Custom Modules: replaceTemplate is a custom module located in your project directory.

/**
 * 2. Creating a Server
Creating a server involves using the http module. Your code does this as follows:
 */
const Server = http.createServer((request, response) => {
  // Handle incoming requests and send responses
});

//http.createServer: This method creates an HTTP server. The callback function takes request and response objects, allowing you to handle incoming requests and send responses.

/**
 * 3. Creating API Endpoints
API endpoints are specific paths on your server that respond to requests. In your code, you handle several endpoints:
 */
const { query, pathname } = url.parse(request.url, true);

if (pathname === "/" || pathname === "/Home") {
  // Serve the home page
} else if (pathname === "/Product") {
  // Serve a product page
} else if (pathname === "/API") {
  // Serve the JSON data
} else {
  // Serve a 404 error page
}

/**url.parse: This method parses the request URL into its components (pathname, query, etc.).
Handling Different Paths: Based on the pathname, the server sends different responses:
/ or /Home serves the overview page.
/Product serves a product detail page.
/API serves JSON data.
Any other path serves a 404 error page. */

/**4. Reading and Writing Files
Reading files is essential for serving content. Your code reads HTML templates and JSON data:
 */

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

/**fs.readFileSync: Reads files synchronously. You use it to load JSON data and HTML templates.
JSON.parse: Converts JSON data from a string into a JavaScript object. */

/**5. Mapping Data
Mapping data is used to transform and generate HTML dynamically: */
const SLUGS = Response.map((item) =>
  slugify(item.productName, { lower: true, replacement: "&" })
);
console.log(SLUGS);

const cardshtml = Response.map((item) =>
  replaceTemplate(Template_Card, item)
).join("");

/**
    * Array.map: Iterates over each item in the Response array and applies a function to it.
Generating Slugs: Converts product names into URL-friendly slugs using slugify.
Generating HTML: Uses replaceTemplate to generate HTML for each product card.
Detailed Explanation of How the Code Works
Server Setup:

The server is created using http.createServer.
The server listens on port 8000 at localhost.
Request Handling:

The URL is parsed to extract the pathname and query parameters.
Depending on the pathname, the server responds with different content:
Home Page (/ or /Home):
Reads the template for the overview page.
Maps over the products to generate HTML for each product card.
Replaces the placeholder in the overview template with the generated product cards HTML.
Product Page (/Product):
Reads the template for a single product.
Finds the product based on the query parameter (id).
Replaces placeholders in the product template with actual product data.
API Endpoint (/API):
Responds with the JSON data.
404 Page:
Responds with a simple 404 error page.
Logging:

Logs each request URL to the console.
Summary
Your project demonstrates the fundamental concepts of Node.js backend development:

Importing Modules: Using require to include core, third-party, and custom modules.
Creating a Server: Using http.createServer to handle HTTP requests and responses.
Handling Routes: Parsing URLs and serving different content based on the pathname.
Reading Files: Using fs.readFileSync to read JSON data and HTML templates.
Generating Dynamic Content: Using Array.map and template replacement to generate dynamic HTML.
API Endpoint: Serving JSON data through a simple API.
By understanding and practicing these concepts, you'll be well-prepared to build more complex backend applications.
    */
