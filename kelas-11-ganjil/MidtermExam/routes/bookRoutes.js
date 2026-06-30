const express = require('express');
const router = express.Router();
const {
  getAllBooks,
  getBookById,
  createBook,
  getBooksByGenre
} = require('../controllers/bookController');

// Route untuk get all books
router.get('/', getAllBooks);

// Route untuk filter by genre (query string)
// Contoh: GET /api/books?genre=Fiction
router.get('/', getBooksByGenre);

// Route untuk create new book
router.post('/', createBook);

// Route untuk get book by ID (parameter)
// Contoh: GET /api/books/64f5a1b2c3d4e5f6g7h8i9j0
router.get('/:id', getBookById);

module.exports = router;