const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth.middleware");
const { addToCart, getCart, removeFromCart } = require("../controllers/cart.controller");


router.post("/", auth, addToCart);

router.get("/", auth, getCart);

router.delete("/", auth, removeFromCart);

module.exports = router;
