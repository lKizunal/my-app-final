const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const servicePurchaseSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email:  {type: String, required: true},
  address:{type: String, required: true},
  otherServices:{type: String, required: true},
  cellNum: { type: Number, required: true },
  telNum: {type: Number, required: true}
}, {
  timestamps: true,
});

const ServicePurchase = mongoose.model('Service', servicePurchaseSchema);

module.exports = ServicePurchase;