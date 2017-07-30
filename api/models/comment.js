const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema(
  {
    content: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    dish: { type: mongoose.Schema.Types.ObjectId, ref: 'Dish' }
  },
  { timestamps:true }
)


module.exports = mongoose.model('Comment', CommentSchema);
