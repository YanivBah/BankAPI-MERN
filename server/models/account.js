const mongoose = require("mongoose");

const Account = mongoose.model("Account", {
  passportID: {
    type: String,
    required: [true, 'Passport ID is required!'],
  },
  cash: {
    type: Number,
    default: 0,
  },
  credit: {
    type: Number,
    default: 0,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

module.exports = Account;