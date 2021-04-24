const Account = require("../models/account");
const User = require("../models/user");

// Get All Accounts
const getAllAccounts = async (req, res) => {
  try {
    const accounts = await Account.find({});
    res.send(accounts);
  } catch (err) {
    res.status(400).send(err);
  }
};

// Get Specific Account
const getAccount = async (req, res) => {
  try {
    const account = await Account.findById(req.params.passportID);
    res.send(account);
  } catch(err) {
    res.status(400).send(err);
  }
};

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

// Transfer
const transfer = async (req, res) => {
  try {
    const from = await User.findOne({ passportID: req.body.from });
    if (!from) 
      return res.status(404).send({err: 'User not found'});
    const fromAccount = await Account.findById(from.account);
    if (!fromAccount) 
      return res.status(404).send({err: 'Account not found'});
    const isEnough = req.body.cash <= fromAccount.cash + fromAccount.credit;
    if (!isEnough) 
      return res.status(400).send({err: 'Not enough money'});
    const to = await User.findOne({ passportID:  req.body.to });
    if (!to) 
      return res.status(404).send({ err: "User not found" });
    const toAccount = await Account.findById(to.account);
    if (!to) 
      return res.status(404).send({ err: "Account not found" });
      
      toAccount.cash += req.body.cash;
      fromAccount.cash -= req.body.cash;
      const transaction = {
        type: 'transfer',
        from: req.body.from,
        to: req.body.to,
        cash: req.body.cash,
        date: new Date()
      }
      toAccount.transactions.unshift(transaction);
      fromAccount.transactions.unshift(transaction);

    await toAccount.save();
    await fromAccount.save();
    res.status(201).send(transaction);
  } catch(err) {
    res.status(400).send(err);
  }
};

// Deposit
const deposit = async (req, res) => {
  try {
    if (req.body.cash <= 0) return res.status(400).send({err: 'need to be more than 0'}) 
    const user = await User.findOne({ passportID: req.body.passportID });
    if (!user) 
      return res.status(404).send({err: 'User not found'});
    const account = await Account.findById(user.account);
    if (!account) 
      return res.status(404).send({ err: "Account not found" });
    account.cash += req.body.cash;

    const transaction = {
      type: 'deposit',
      cash: req.body.cash,
      date: new Date()
    }
    account.transactions.unshift(transaction);
    await account.save();
    res.status(201).send(transaction);
  } catch(err) {
    res.status(400).send(err);
  }
};

// Withdraw
const withdraw = async (req, res) => {
  try {
    const user = await User.findOne({ passportID: req.body.passportID });
    if (!user) 
    return res.status(404).send({ err: "User not found" });
    const account = await Account.findById(user.account);
    if (!account) 
    return res.status(404).send({ err: "Account not found" });
    const isEnough = req.body.cash <= account.cash + account.credit;
    if (!isEnough) 
    return res.status(400).send({ err: "Not enough money" });
    account.cash -= req.body.cash;

    const transaction = {
      type: "withdraw",
      cash: req.body.cash,
      date: new Date(),
    };
    account.transactions.unshift(transaction);
    await account.save();
    res.status(201).send(transaction);
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = {
  getAllAccounts,
  getAccount,
  createAccount,
  transfer,
  deposit,
  withdraw,
};