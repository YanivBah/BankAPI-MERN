const User = require("../models/user");

// Create New User
const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).send(newUser);
  } catch (err) {
    res.status(400).send(err);
  }
};

// Login User
const loginUser = async (req, res) => {
  try {
    const user = await User.findOne(req.body);
    if (!user) return res.status(404).send();
    res.send({status: "Logged In"})
    // console.log(user);
    // const newUser = new User(req.body);
    // await newUser.save();
    // res.status(201).send(newUser);
    // throw new Error('lili');
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = { createUser, loginUser };