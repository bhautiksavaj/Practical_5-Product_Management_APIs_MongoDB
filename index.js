require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const port = 5000;
const mongoose = require("mongoose");

const productModal = require("./models/product");
const companyModal = require("./models/company");
const sellerModal = require("./models/seller");
const morgan = require("morgan");
app.use(morgan("dev"));
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("db connected"));

app.get("/", (req, res) => res.send("Hello World!"));

// add new product
app.post("/product", (req, res) => {
  const { newProduct } = req.body;
  productModal.create(newProduct);
  return res.json({ data: "New product Added successfully" });
});
// get all product
app.get("/product", async (req, res) => {
  const productList = await productModal.find();
  if (productList.length === 0) {
    return res.json({ data: "no product found" });
  }
  return res.json({ data: productList });
});

// delete product
app.delete("/product/productdelete/:name", async (req, res) => {
  const deletedProduct = await productModal.findOneAndDelete({
    title: req.params.name,
  });

  if (deletedProduct) return res.json({ data: "product deleted successfully" });

  return res.json({ data: "product not available" });
});

// add company
app.post("/company", (req, res) => {
  const { newCompany } = req.body;
  companyModal.create(newCompany);
  return res.json({ data: "New company Added successfully" });
});
// get all company
app.get("/company", async (req, res) => {
  const companyList = await companyModal.find();
  if (companyList.length === 0) {
    return res.json({ data: "no company found" });
  }
  return res.json({ data: companyList });
});

// delete company
app.delete("/company/companydelete/:name", async (req, res) => {
  //   const uname = req.params.uname;
  const deletedCompany = await companyModal.findOneAndDelete({
    name: req.params.name,
  });
  //   console.log("deletedUser", deletedUser);
  if (deletedCompany) return res.json({ data: "company deleted successfully" });

  return res.json({ data: "company not available" });
});

// add seller
app.post("/seller", (req, res) => {
  const { newSeller } = req.body;
  sellerModal.create(newSeller);
  return res.json({ data: "New seller Added successfully" });
});
// get all seller
app.get("/seller", async (req, res) => {
  const sellerList = await sellerModal.find();
  if (sellerList.length === 0) {
    return res.json({ data: "no seller found" });
  }
  return res.json({ data: sellerList });
});

// delete company
app.delete("/seller/sellerdelete/:name", async (req, res) => {
  //   const uname = req.params.uname;
  const deletedSeller = await sellerModal.findOneAndDelete({
    name: req.params.name,
  });
  //   console.log("deletedUser", deletedUser);
  if (deletedSeller) return res.json({ data: "Seller deleted successfully" });

  return res.json({ data: "seller not available" });
});
// // Update user
// app.put("/user/changepassword/:uname", async (req, res) => {
//   const uname = req.params.uname;
//   const pass = req.body.password;
//   const updatedUser = await userModel.findOneAndUpdate(
//     { username: uname },
//     { password: pass },
//     { new: true }
//   );
//   return res.json({ data: "password updated successfully" });
// });

app.listen(port, () => console.log(`server running on port ${port}`));
