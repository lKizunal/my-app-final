const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productitemSchema = new Schema({
  productname: { type: String, required: true },
  productdescription:  {type: String, required: true},
}, {
  timestamps: true,
});
const ProductSchema = mongoose.model('Product Item', productitemSchema);

module.exports = ProductSchema;