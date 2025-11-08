const express = require("express");
const router = express.Router();
const userModel = require("../models/User");
const axios = require("axios");

router.get("/recommend/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    console.log("🔹 Incoming request for recommendations of user:", userId);

    const users = await userModel.find();
    const targetUser = await userModel.findById(userId);

    if (!targetUser) {
      console.log("❌ User not found in DB for ID:", userId);
      return res.status(404).json({ error: "User not found" });
    }

    // Log what you're sending to the ML model
    console.log("📤 Sending data to ML service...");
    console.log("👉 Total users:", users.length);
    console.log("👉 Target user:", targetUser.email || targetUser.username);

    // Send request to Flask ML API
    const response = await axios.post("http://localhost:5000/recommend", {
      users,
      targetUser,
    });

    // Log the response from Python
    console.log("✅ Received response from ML service:");
    console.log(response.data);

    res.json({ recommendations: response.data.recommendations });
  } catch (err) {
    console.error("🚨 Error in recommend route:", err.message);
    if (err.response) {
      console.error("Flask Response Data:", err.response.data);
      console.error("Flask Response Status:", err.response.status);
    }
    res.status(500).json({ error: "Internal server error" });
  }
});


module.exports = router;
