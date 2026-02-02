const express = require("express");
const router = express.Router();

const { getProducts, createProduct } = require("../controllers/product.controller");

const auth = require("../middleware/auth.middleware");
const adminAuth = require("../middleware/admin.middleware");


router.get("/", getProducts);


router.post("/", auth, adminAuth, createProduct);

//router.post("/", createProduct);


module.exports = router;
