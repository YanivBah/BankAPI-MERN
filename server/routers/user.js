const express = require("express");
const router = new express.Router();
const { createUser, loginUser } = require("../controllers/user");

router.post("/user", createUser);
router.post("/user/login", loginUser);
// router.get("/accounts", getAllAccounts);
// router.get("/accounts/:passportID", getAccount);
// router.post("/accounts/new", createAccount);

module.exports = router;