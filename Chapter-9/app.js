// External Module
const express = require("express");

const requestHandler = require("./user");

const app = express();
//1. express is used to create application and export its, app also take req and res as parameters
//2.use is used to create middleware
//3. favicon means small icon in the browser tab
//4. app is used for create sever and also work as createserver
// 5. send means end
// add middleware
app.use("/", (req, res, next) => {
  console.log("Came in first middleware", req.url, req.method);
  next();
  res.send("<h1>First Middleware</h1>");
  //next is used to call next middleware
});

app.use("/", (req, res, next) => {
  console.log("Came in another middleware", req.url, req.method);
  res.send("<h1>Another Middleware</h1>");
  //next is used to call next middleware
});

app.use("/submit-details", (req, res, next) => {
  console.log("Came in Second middleware", req.url, req.method);
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
