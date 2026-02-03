const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const Cart = require("../models/Cart");
const Order = require("../models/Order");
const Product = require("../models/Product");


const checkout = async (req, res) => {
  try {
    const userId = req.user.id;

    
    const cart = await Cart.findOne({ userId }).populate("items.productId");

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }
    let total = 0;

    cart.items.forEach((item) => {
      total += item.productId.price * item.quantity;
    });
     const paymentIntent = await stripe.paymentIntents.create({
      amount: total * 100,
      currency: "usd",
      payment_method_types: ["card"]
    });

        const order = await Order.create({
      userId,
      items: cart.items,
      totalAmount: total,
      paymentStatus: "pending"
    });
 
        for (let item of cart.items) {
      const product = await Product.findById(item.productId._id);

      product.stock -= item.quantity;

      await product.save();
    }
       cart.items = [];
    await cart.save();
        res.json({
      message: "Checkout successful",
      clientSecret: paymentIntent.client_secret,
      order
    });

  } catch (error) {
    res.status(500).json({
      message: "Checkout failed",
      error: error.message
    });
  }
};

module.exports = { checkout };



