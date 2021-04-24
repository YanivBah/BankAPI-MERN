const mongoose = require("mongoose");

const User = mongoose.model("User", {
  passportID: {
    type: String,
    required: true,
    unique: true,
    validate(val) {
      const regex = /^\d+$/;
      if (!regex.test(val)) throw new Error({err: 'Only numbers'})
    }
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
    min: 6,
  },
  account: {
    type: String,
    required: true,
  },
});

module.exports = User;
