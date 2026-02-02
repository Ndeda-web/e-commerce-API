const Product = require("../models/Product");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch products", error: error.message });
  }
};


const createProduct = async (req, res) => {
  console.log("Body received:", req.body);
  try {
    const { title, description, price, stock, category } = req.body;
    const product = await Product.create({ title, description, price, stock, category });
    res.status(201).json({ message: "Product created", product });
  } catch (error) {
    res.status(500).json({ message: "Failed to create product", error: error.message });
  }
};

module.exports = { getProducts, createProduct };
