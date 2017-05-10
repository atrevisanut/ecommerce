var mongoose = requre('mongoose');

var cartsModel = mongoose.Schema({
  product: {type: String, ref: "Product"},
  cartInfo: [{
    productName: {type: String, required: true, index: true},
    price: {type: Number, required: true, minlength: 0},
    description: {type: String, required: true},
    totalCost: {type: Number, required: true, minlength: 0}
  }]

});
module.exports = mongoose.model('Carts', cartsModel); //same as var^^
