const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const authMiddleware = require("../middleware/authMiddleware");
const bcrypt = require("bcryptjs");
const router = express.Router();

/* REGISTER SESSION */
router.post("/register", async (req, res) => {
    const { username, password } = req.body;
    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: "Username sudah digunakan" });
        }
        
        const user = await User.create({ username, password });
        res.json({ message: "Register berhasil" });
    } catch (error) {
        res.status(500).json({ message: "Server error: " + error.message });
    }
});

/* LOGIN SESSION */
router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: "Login gagal" });
        }
        
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Login gagal" });
        }
        
        const token = jwt.sign(
            { id: user._id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );
        
        res.cookie("token", token, { httpOnly: true });
        res.json({ message: "Login berhasil", token });
    } catch (error) {
        res.status(500).json({ message: "Server error: " + error.message });
    }
});

/* PROFILE SESSION */
router.get("/profile", authMiddleware, (req, res) => {
    res.json({ username: req.user.username });
});

/* LOGOUT SESSION */
router.post("/logout", (req, res) => {
    res.clearCookie("token");
    res.json({ message: "Logout berhasil" });
});

module.exports = router;
