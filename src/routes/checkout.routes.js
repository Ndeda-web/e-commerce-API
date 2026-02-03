const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth.middleware");
const { checkout } = require("../controllers/checkout.controller");

router.post("/", auth, checkout);

module.exports = router;
