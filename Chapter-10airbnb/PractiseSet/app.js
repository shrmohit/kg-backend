const express = require("express");
const path = require("path");

const contactRouter = require("./routes/contactUsRouter");
const rootDir = require("./utils/pathUtils");
const app = express();

app.use(express.urlencoded());

// //first Dummy middleware
// app.use((req, res, next) => {
//   console.log("Its my first Dummy Middleware", req.url, req.method);
//   next();
// });

// //second Dummy middleware
// app.use((req, res, next) => {
//   console.log("Its my second Dummy  Middleware", req.url, req.method);
//   next();
// });

// //third middleware
// app.use((req, res, next) => {
// console.log("Its my third Dummy  Middleware", req.url, req.method);
//   res.send("<p>Welcome to complete Coding</p>");
// });

app.get((req, res, next) => {
  console.log("Handling / for GET", req.url, req.method);
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
  next();
});

app.get("/", (req, res, next) => {
  console.log("Handling / for GET", req.url, req.method);
  res.send("<h1>Welcome to complete Coding</h1>");
  next();
});

app.use(contactRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
