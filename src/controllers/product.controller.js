const Product = require("../models/Product");

const getProducts = async (req, res) => {
  try {
    const { category, minPrice, maxPrice, search } = req.query;

    let filter = {};

    if (category) filter.category = category;
    if (minPrice || maxPrice) filter.price = {};
    if (minPrice) filter.price.$gte = Number(minPrice);
    if (maxPrice) filter.price.$lte = Number(maxPrice);
    if (search) filter.title = { $regex: search, $options: "i" };

    const products = await Product.find(filter);
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

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const product = await Product.findByIdAndUpdate(id, updates, { new: true });

    res.json({ message: "Product updated", product });
  } catch (error) {
    res.status(500).json({ message: "Failed to update product", error: error.message });
  }
};


module.exports = { getProducts, createProduct, updateProduct };
