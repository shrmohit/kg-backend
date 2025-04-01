const http = require("http");
const { handleServer } = require("./practise");

const Server = http.createServer(handleServer);

const PORT = 3000;
Server.listen(PORT, () => {
  console.log(`Server is Runing at http://localhost:${PORT}`);
});
