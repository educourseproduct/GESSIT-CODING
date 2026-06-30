const connectDB = require('./config/db');
const express = require('express');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to Database
connectDB();

app.get("/", (req, res) => {
  res.send("Welcome to the ConnectMongoDB App!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
