const express = require("express");

const app = express();

//first Dummy middleware
app.use((req, res, next) => {
  console.log("Its my first Dummy Middleware", req.url, req.method);
  next();
});

//second Dummy middleware
app.use((req, res, next) => {
  console.log("Its my second Dummy  Middleware", req.url, req.method);
  next();
});

// //third middleware
// app.use((req, res, next) => {
// console.log("Its my third Dummy  Middleware", req.url, req.method);
//   res.send("<p>Welcome to complete Coding</p>");
// });

app.get("/", (req, res, next) => {
  console.log("Handling / for GET", req.url, req.method);
  res.send("<h1>Welcome to complete Coding</h1>");
  next();
});

app.get("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for GET", req.url, req.method);
  res.send(`
    <form action="/contact-us" method="POST">
    
      <input
        type="text"
        placeholder="Name"
        name="name"
       
      />
     
      <input
        type="email"
        placeholder="Email"
        name="email"
      
      />
     <input type="submit"/>
    </form>
    `);
});

app.post("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for GET", req.url, req.method);
  res.send(`<h1>Thanks for your details</h1>`);
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
