const mongoose = require("mongoose");
const User = require("./models/User"); 
require("dotenv").config();

const updateRoles = async () => {
  try {
    // Connect DB
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");


    const result = await User.updateMany(
      { role: { $exists: false } },
      { $set: { role: "user" } }
    );

    console.log("Users updated:", result.modifiedCount);

    process.exit();
  } catch (error) {
    console.log("Error:", error.message);
    process.exit(1);
  }
};

updateRoles();



