const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductByID,
} = require("../controller/productControllers");

//@desc GET all products form DB
//@route GET /api/products
//@access Public
router.get("/", getAllProducts);

//@desc GET a product by id form DB
//@route GET /api/products/:id
//@access Public
router.get("/:id", getProductByID);

module.exports = router;
