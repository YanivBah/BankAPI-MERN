const express = require("express");
const router = new express.Router();
const Account = require("../models/account");

router.get('/accounts', async (req, res) => {
  const accounts = await Account.find({});
  return res.send(accounts);
})


module.exports = router;