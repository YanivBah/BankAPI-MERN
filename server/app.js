const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const path = require("path");
const url = require('./atlas');
const userRouter = require("./routers/user");
const accountRouter = require("./routers/account");
const transactionRouter = require("./routers/transaction");

mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const app = express();
// app.use(express.static(path.join(__dirname, "build")));
app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(accountRouter);
// app.use(transactionRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server is up on PORT " + port));
