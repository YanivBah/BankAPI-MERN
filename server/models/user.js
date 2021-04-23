const mongoose = require("mongoose");

const User = mongoose.model("User", {
  passportID: {
    type: String,
    required: [true, "Passport ID is required!"],
    unique: true,
  },
  firstName: {
    type: String,
    required: [true, "First Name is required!!"],
  },
  lastName: {
    type: String,
    required: [true, "Last Name is required!!"],
  },
  password: {
    type: String,
    required: [true, "Password is required!"],
  },
});

module.exports = User;
