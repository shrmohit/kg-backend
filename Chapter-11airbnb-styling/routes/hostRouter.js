const express = require("express");
const path = require("path");
const hostRouter = express.Router();

// Local Module
const rootDir = require("../utils/pathUtils");
hostRouter.get("/add-home", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "addHome.html"));
});

hostRouter.post("/add-home", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(rootDir, "views", "houseadded.html"));
});
module.exports = hostRouter;
