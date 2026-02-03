const express = require("express");
const router = express.Router();

const { getProducts, createProduct , updateProduct} = require("../controllers/product.controller");

const auth = require("../middleware/auth.middleware");
const adminAuth = require("../middleware/admin.middleware");


router.get("/", getProducts);

router.put("/:id", auth, adminAuth, updateProduct);


router.post("/", auth, adminAuth, createProduct);

//router.post("/", createProduct);


module.exports = router;
