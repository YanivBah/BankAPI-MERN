const mongoose = require("mongoose");

const User = mongoose.model("User", {
  passportID: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  account: {
    type: String,
    required: true,
  },
});

module.exports = User;
