const Cart = require("../models/Cart");
const Product = require("../models/Product");


const addToCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId, quantity } = req.body;

    
    let cart = await Cart.findOne({ userId });

    
    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }

    
    const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);

    if (itemIndex > -1) {
      
      cart.items[itemIndex].quantity += quantity;
    } else {
      
      cart.items.push({ productId, quantity });
    }

    await cart.save();

    res.json({ message: "Product added to cart", cart });

  } catch (error) {
    res.status(500).json({ message: "Failed to add to cart", error: error.message });
  }
};


const getCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const cart = await Cart.findOne({ userId }).populate("items.productId");

    if (!cart) {
      return res.json({ message: "Cart is empty", items: [] });
    }

    res.json(cart);

  } catch (error) {
    res.status(500).json({ message: "Failed to fetch cart", error: error.message });
  }
};

// 3️⃣ Remove item from cart
const removeFromCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId } = req.body;

    const cart = await Cart.findOne({ userId });

    if (!cart) return res.status(404).json({ message: "Cart not found" });

    cart.items = cart.items.filter(item => item.productId.toString() !== productId);

    await cart.save();

    res.json({ message: "Product removed from cart", cart });

  } catch (error) {
    res.status(500).json({ message: "Failed to remove item", error: error.message });
  }
};

module.exports = { addToCart, getCart, removeFromCart };
