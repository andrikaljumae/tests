const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullName: {type: String, required: true},
  personalCode: {type: Number, required: true, unique: true},
  phoneNumber: {type: Number, required: true},
  address: {type: String, required: true},
  created: {type: Date, default: Date.now},
});

const User = mongoose.model("User", userSchema);

module.exports = {
  User,
};
