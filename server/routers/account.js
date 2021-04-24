const express = require("express");
const router = new express.Router();
const {
  getAllAccounts,
  getAccount,
  createAccount,
  transfer,
  deposit,
  withdraw
} = require("../controllers/account");

router.get("/accounts", getAllAccounts);
router.get("/accounts/:passportID", getAccount);
router.post("/accounts/new", createAccount);
router.patch("/accounts/transfer", transfer);
router.patch("/accounts/deposit", deposit);
router.patch("/accounts/withdraw", withdraw);

module.exports = router;