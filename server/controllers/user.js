const User = require("../models/user");

// Create New User
const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.send(newUser);
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = { createUser };