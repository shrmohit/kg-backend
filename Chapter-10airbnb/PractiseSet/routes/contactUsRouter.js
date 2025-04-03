const express = require("express");
const path = require("path");
const rootDir = require("../utils/pathUtils");

const contactRouter = express.Router();

contactRouter.get("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for GET", req.url, req.method);
  res.sendFile(path.join(rootDir, "views", "contact.html"));
});

contactRouter.post("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for GET", req.url, req.method);
  console.log(req.body);
  res.send(`<h1>Thanks for your details</h1>
    <p>Name:${req.body.name}</p>`);
});

module.exports = contactRouter;
