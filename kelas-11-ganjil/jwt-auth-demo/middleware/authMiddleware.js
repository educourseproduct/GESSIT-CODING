const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    // Mengambil token dari header Authorization: Bearer <token>
    const authHeader = req.header("Authorization");
    if (!authHeader) return res.status(401).json({ message: "Akses ditolak. Token tidak ada." });

    const token = authHeader.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Format token salah." });

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified; // Menyimpan data user terverifikasi ke request
        next();
    } catch (err) {
        res.status(400).json({ message: "Token tidak valid." });
    }
};
