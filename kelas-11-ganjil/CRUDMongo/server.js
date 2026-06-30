require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// --- MIDDLEWARES ---
app.use(express.json());

// --- ROUTES ---
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to User API!');
});

// Connect to MongoDB and start the server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}).catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
});
