const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.use(express.urlencoded());

app.get("/", (req, res, next) => {
  res.send(`
    <h1>Welcome to airbnb</h1>
    <a href="/add-home">Add Home</a>
    `);
});

app.get("/host/add-home", (req, res, next) => {
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

app.post("/host/add-home", (req, res, next) => {
  console.log(req.body);
  res.send(`
    <h1>Home Registered Sucessfully</h1>
      <a href="/">Go To Home</a>
    `);
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server runing on address http://localhost:${PORT}`);
});
