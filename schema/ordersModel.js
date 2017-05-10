var mongoose = requre('mongoose');

var ordersModel = mongoose.Schema({
  user: {type: String, ref: "User"},
  productInfo: [{
    name: {type: String, required: true, index: true},
    price: {type: Number, required: true, minlength: 0},
    description: {type: String, required: true}
  }]

});
module.exports = mongoose.model('Product', ordersModel); //same as var^^
