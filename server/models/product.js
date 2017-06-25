var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  city: { type: String },
  productName: { type: String },
  website: { type: String },
  logo: { type: String },
  categories: { type: Array }
});

module.exports = mongoose.model('Product', schema);