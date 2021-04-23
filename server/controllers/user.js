const User = require("../models/user");
const Account = require("../models/account");
const { ObjectId } = require("mongoose");

// Create New User
const createUser = async (req, res) => {
  try {
    const newAccount = new Account();
    await newAccount.save()
    req.body.account = newAccount._id;
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).send(newUser);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};

// Login User
const loginUser = async (req, res) => {
  try {
    const user = await User.findOne(req.body);
    if (!user) return res.status(404).send();
    const account = await Account.findById(user.account);
    const details = {
      firstName: user.firstName,
      lastName: user.lastName,
      passportID: user.passportID,
      account
    }
    res.send(details);
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = { createUser, loginUser };