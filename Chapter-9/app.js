// core Module
const http = require("http");
// External Module
const express = require("express");
// Local Module
const requestHandler = require("./user");

const app = express();
//1. express is used to create application and export its, app also take req and res as parameters
//2.use is used to create middleware
app.use((req, res, next) => {
  console.log("Came in first middleware", req.url, req.method);
  next();
  //next is used to call next middleware
});

app.use((req, res, next) => {
  console.log("Came in Second middleware", req.url, req.method);
});
const server = http.createServer(app);

const PORT = 3002;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
