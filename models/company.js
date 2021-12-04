const mongoose = require("mongoose");
const { stringify } = require("querystring");

const companySchema = mongoose.Schema({
  companyId: String,
  name: String,
  productIds: [String],
});

const companyModal = mongoose.model("company", companySchema, "company");

module.exports = companyModal;
