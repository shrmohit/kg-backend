const http = require("http");

const server = http.createServer((req, res) => {
  console.log("url", req.url, "method", req.method, "headers", req.headers);
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  res.write("</html>");
  res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is Running at http://localhost:${PORT}`);
});
