const express = require("express");
const router = new express.Router();
const { getAllAccounts, getAccount, createAccount } = require("../controllers/account");

router.get("/accounts", getAllAccounts);
router.get("/accounts/:passportID", getAccount);
router.post("/accounts/new", createAccount);

module.exports = router;