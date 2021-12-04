const mongoose = require("mongoose");
const { stringify } = require("querystring");

const productSchema = mongoose.Schema({
  productId: String,
  title: String,
  price: String,
  category: [String],
  companyId: String,
  sellerId: [String],
});

const productModal = mongoose.model("product", productSchema, "product");

module.exports = productModal;
