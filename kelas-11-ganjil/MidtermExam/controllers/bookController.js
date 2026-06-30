const Book = require('../models/Book');

// @desc    Get all books
// @route   GET /api/books
// @access  Public
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({
      success: true,
      count: books.length,
      message: 'Books retrieved successfully',
      data: books
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching books',
      error: error.message,
      data: null
    });
  }
};

// @desc    Get book by ID
// @route   GET /api/books/:id
// @access  Public
const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    
    if (!book) {
      return res.status(404).json({
        success: false,
        message: 'Book not found',
        data: null
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Book found',
      data: book
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching book',
      error: error.message,
      data: null
    });
  }
};

// @desc    Create new book
// @route   POST /api/books
// @access  Public
const createBook = async (req, res) => {
  try {
    const { title, author, genre, year } = req.body;
    
    // Validasi input
    if (!title || !author || !genre) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields (title, author, genre)',
        data: null
      });
    }
    
    const book = await Book.create({
      title,
      author,
      genre,
      year
    });
    
    res.status(201).json({
      success: true,
      message: 'Book created successfully',
      data: book
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error creating book',
      error: error.message,
      data: null
    });
  }
};

// @desc    Filter books by genre (Query String)
// @route   GET /api/books?genre=Fiction
// @access  Public
const getBooksByGenre = async (req, res) => {
  try {
    const { genre } = req.query;
    
    if (!genre) {
      return res.status(400).json({
        success: false,
        message: 'Please provide genre parameter',
        data: null
      });
    }
    
    const books = await Book.find({ genre: genre });
    
    res.status(200).json({
      success: true,
      count: books.length,
      message: `Books in genre "${genre}" retrieved successfully`,
      data: books
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error filtering books',
      error: error.message,
      data: null
    });
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  getBooksByGenre
};