const http = require("http");

const server = http.createServer((req, res) => {
  console.log("url", req.url, "method", req.method, "headers", req.headers);
  if (req.url === "/home") {
    res.write("<h1>Welcome to Home Page</h1>");
    return res.end();
  } else if (req.url === "/Men") {
    res.write("<h1>Welcome to men Page</h1>");
    return res.end();
  }
  res.write(`
    <html lang="en">
  <head>
    <title>Document</title>
  </head>
  <body>
    <nav>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/Men">Men</a></li>
        <li><a href="/Women">Women</a></li>
        <li><a href="/Cart">Cart</a></li>
      </ul>
    </nav>
  </body>
</html>

`);
  res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is Running at http://localhost:${PORT}`);
});
