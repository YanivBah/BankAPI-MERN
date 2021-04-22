const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const url = require('./atlas');
const accountRouter = require("./routers/account");
const transactionRouter = require("./routers/transaction");

mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const app = express();
const port = process.env.PORT || 80;
app.use(cors());
app.use(express.json());
app.use(accountRouter);
app.use(transactionRouter);

app.listen(port, () => console.log("Server is up on PORT " + port));
