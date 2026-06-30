const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a book title'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  author: {
    type: String,
    required: [true, 'Please provide an author name'],
    trim: true,
    maxlength: [100, 'Author cannot be more than 100 characters']
  },
  genre: {
    type: String,
    required: [true, 'Please provide a genre'],
    trim: true,
    enum: {
      values: ['Fiction', 'Non-Fiction', 'Mystery', 'Science', 'History', 'Romance', 'Fantasy'],
      message: 'Please select a valid genre'
    }
  },
  year: {
    type: Number,
    min: [1000, 'Year cannot be less than 1000'],
    max: [2099, 'Year cannot be greater than 2099']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Book', bookSchema);