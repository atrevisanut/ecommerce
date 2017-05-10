var productModel = require('./../schema/productModel');
module.exports = {
    create: function(req, res) {
        var product = new productModel(req.body);
        product.save(function(err, result) {
            res.send(result);
        });
    },
    read: function(req, res) {
        productModel.find().exec(function(err, s) {
            res.send(s);
        });
    },
    readSpecific: function(req, res) {
        productModel.findOne(req.query).exec(function(err, s) {
            res.send(s);
        });
    },
    update: function(req, res) {
        productModel.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
            res.send(result);
        });
    },
    delete: function(req, res) {
        productModel.findByIdAndRemove(req.params.id, req.body, function(err, result) {
            res.send(result);
        });
    }
};
