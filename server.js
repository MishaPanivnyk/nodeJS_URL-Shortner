// src/server.js
const express = require("express");
const connectDB = require("./config/db");
const urlRoutes = require("./routes/api/urlRoutes");

const app = express();
const PORT = 3000;

// Connect to the database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api/url", urlRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
