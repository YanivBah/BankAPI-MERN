const mongoose = require("mongoose");

const Account = mongoose.model("Account", {
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
  transactions: {
    type: Array,
    default: [],
  }
});

module.exports = Account;