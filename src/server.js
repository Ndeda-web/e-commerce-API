const express = require("express");
const connectDB = require("./config/db");


const auth = require("./middleware/auth.middleware");
const cartRoutes = require("./routes/cart.routes");



require("dotenv").config();


const app = express();
app.use(express.json());

connectDB();

app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/products", require("./routes/product.routes"));
app.use("/api/cart", require("./routes/cart.routes"));
app.use("/api/checkout", require("./routes/checkout.routes"));



app.get("/api/protected", auth, (req, res) => {
  res.json({
    message: "You accessed a protected route!",
    userId: req.user.id
  });
});


app.get("/", (req, res) => {
  res.send("E-Commerce API is running...");
});



app.listen(process.env.PORT, () => console.log("Server running on port 5000"));
