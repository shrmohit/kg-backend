const http = require("http");

const server = http.createServer((req, res) => {
  console.log("url", req.url, "method", req.method, "headers", req.headers);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is Running at http://localhost:${PORT}`);
});
