require('dotenv').config();
const express = require('express');
const cors = require('cors'); // 1. Import cors
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors()); // 2. WAJIB ADA DI SINI (Sebelum routes)
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/tasks', require('./routes/taskRoutes'));

// Root Route
app.get('/', (req, res) => {
    res.send('Taskify API is running...');
});

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});