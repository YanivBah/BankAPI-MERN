const Account = require("../models/account");

// Get All Accounts
const getAllAccounts = async (req, res) => {
  try {
    const accounts = await Account.find({});
    return res.send(accounts);
  } catch (err) {
    res.status(400).send(err);
  }
}

// Get Specific Account
const getAccount = async (req, res) => {
  try {
    const account = await Account.findById(req.params.passportID);
    res.send(account);
  } catch(err) {
    res.status(400).send(err);
  }
}

// Create Account
const createAccount = async (req, res) => {
  try {
    const newAccount = new Account(req.body);
    await newAccount.save();
    res.status(201).send(newAccount);
  } catch(err) {
    res.status(400).send(err)
  }
};

module.exports = { getAllAccounts, getAccount, createAccount };