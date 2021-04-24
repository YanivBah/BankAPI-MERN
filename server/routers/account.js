const express = require("express");
const router = new express.Router();
const { getAllAccounts, getAccount, createAccount, transfer } = require("../controllers/account");

router.get("/accounts", getAllAccounts);
router.get("/accounts/:passportID", getAccount);
router.post("/accounts/new", createAccount);
router.patch("/accounts/transfer", transfer);

module.exports = router;