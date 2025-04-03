const express = require("express");

const hostRouter = express.Router();

hostRouter.get("/host/add-home", (req, res, next) => {
  res.send(`
    <h1>Register your home here:</h1>
     <form action="/host/add-home" method="POST">
    
      <input
        type="text"
        placeholder="Enter your houseName"
        name="housename"
      />
     <input type="submit"/>
    </form>
    `);
});

hostRouter.post("/host/add-home", (req, res, next) => {
  console.log(req.body);
  res.send(`
    <h1>Home Registered Sucessfully</h1>
      <a href="/">Go To Home</a>
    `);
});
module.exports = hostRouter;
