const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  fullName: {type: String, required: true},
  burger: {type: String },
  drink: {type: String},
  created: {type: Date, default: Date.now},
});

const Order = mongoose.model("Order", orderSchema);

module.exports = {
  Order,
};
