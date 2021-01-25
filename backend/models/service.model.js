const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
  servicename: { type: String, required: true },
  servicedescription:  {type: String, required: true},
}, {
  timestamps: true,
});
const ServiceSchema = mongoose.model('ServiceProduct', serviceSchema);

module.exports = ServiceSchema;