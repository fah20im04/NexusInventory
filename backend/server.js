const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Item = require("./models/Item"); // Import the model

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// -------------------
// Database Connection
// -------------------
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ MongoDB Atlas Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error.message);
    process.exit(1);
  }
};

// Call DB connection
connectDB();

// -------------------
// Routes
// -------------------

app.get("/", (req, res) => {
  res.send("🚀 NexusInventory Backend is running...");
});

// 1. GET ALL ITEMS
app.get("/api/items", async (req, res) => {
  try {
    const items = await Item.find().sort({ createdAt: -1 });
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: "Server Error: Could not fetch items" });
  }
});

// 2. GET SINGLE ITEM
app.get("/api/items/:id", async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Item not found" });
    res.status(200).json(item);
  } catch (err) {
    res.status(400).json({ message: "Invalid ID format" });
  }
});

// 3. POST NEW ITEM
app.post("/api/items", async (req, res) => {
  try {
    const { name, description, price, imageUrl, category } = req.body;

    const newItem = new Item({
      name,
      description,
      price,
      imageUrl,
      category,
    });

    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// -------------------
// Server
// -------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🔥 Server running on port ${PORT}`);
});
