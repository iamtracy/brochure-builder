var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// , required: true
var schema = new Schema({
  city: { type: String },
  productName: { type: String },
  website: { type: String },
  logo: { type: String }
});

module.exports = mongoose.model('Product', schema);