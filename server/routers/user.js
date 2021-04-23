const express = require("express");
const router = new express.Router();
const { createUser } = require("../controllers/user");

router.post("/user", createUser);
// router.get("/accounts", getAllAccounts);
// router.get("/accounts/:passportID", getAccount);
// router.post("/accounts/new", createAccount);

module.exports = router;