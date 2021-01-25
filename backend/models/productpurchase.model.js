const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productPurchaseSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email:  {type: String, required: true},
  address:{type: String, required: true},
  cellNum: { type: Number, required: true },
}, {
  timestamps: true,
});
const ProductPurchase = mongoose.model('Product', productPurchaseSchema);

module.exports = ProductPurchase;