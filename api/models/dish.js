const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const DishSchema = new mongoose.Schema(
  {
    name: { type: String },
    poster: { type: String },
    price: { type: String },
    desc: { type: String },
  },
  {timestamps:true}
)


module.exports = mongoose.model('Dish', DishSchema);
