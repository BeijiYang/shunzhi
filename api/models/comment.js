const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema(
  {
    content: { type: String },
    userId: { type: String }
  },
  { timestamps:true }
)


module.exports = mongoose.model('Comment', CommentSchema);
