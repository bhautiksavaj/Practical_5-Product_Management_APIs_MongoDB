const mongoose = require("mongoose");
const { stringify } = require("querystring");

const sellerSchema = mongoose.Schema({
  sellerId: String,
  name: String,
  productIds: [String],
});

const sellerModal = mongoose.model("seller", sellerSchema, "seller");

module.exports = sellerModal;
