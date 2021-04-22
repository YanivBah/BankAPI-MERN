const mongoose = require("mongoose");

const Account = mongoose.model("Account", {
  passportID: {
    type: String
  },
  cash: {
    type: Number,
    default: 0
  },
  credit: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  }
});

// const newAcc = new Account({name: 'Yaniv'});
// newAcc.save().then(console.log(newAcc, 'added!')).catch(err => console.log(err));

module.exports = Account;