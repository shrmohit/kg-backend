// External Module
const express = require("express");

//  Local Module
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");

const app = express();

app.use(express.urlencoded());

app.use(userRouter);
app.use("/host", hostRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname), "views", "404.html");
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server runing on address http://localhost:${PORT}`);
});
