const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PHONE = "phone";
const LAPTOP = "laptop";
const CATEGORIES = [PHONE, LAPTOP];

const productSchema = new Schema({
  title: {type: String, required: true},
  price: {type: Number, required: true},
  created: {type: Date, default: Date.now},
  category: {type: String, enum: CATEGORIES}
});

const Product = mongoose.model("Product", productSchema);

module.exports = {
  Product,
  categories: {
    PHONE,
    LAPTOP
  }
};