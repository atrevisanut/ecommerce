var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
  Title:{
    type: String,
    unique: true,
    required: true,
    index: true
  },
  Description:{
    type: String,
    required: true
  },
  Price:{
    type: Number,
    required: true,
    minlength: 0
  }
});
module.exports = mongoose.model('Product', productSchema); //same as var^^
