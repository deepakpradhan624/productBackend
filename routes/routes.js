const express = require("express");
const {
  addUpdateProduct,
  products,
  optionLists,
} = require("../controller/productController");

const router = express.Router();

router.post("/add-update-product", addUpdateProduct);
router.get("/products", products);
router.get("/product-sku", optionLists);

module.exports = { router };
