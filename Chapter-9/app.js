// core Module
const http = require("http");
// External Module
const express = require("express");
// Local Module
const requestHandler = require("./user");

const app = express();
// express is used to create application and export its, app also take req and res as parameters

const server = http.createServer(app);

const PORT = 3002;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
