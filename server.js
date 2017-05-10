var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var productsCtrl = require('./controllerback/productsCtrl.js');

var port = 3000;

var app = express();
var Schema = mongoose.Schema;
// var corsOptions = {
//   origin:'http://localhost:3000'
// }
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/ecommerce-site');
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    //connected!
});
// newProduct.create(newProduct, function(err, newProduct))
app.post('/api/products', productsCtrl.create);
//   var newthing = new Constructor(req.body)
//     newthing.save(function(error, response) {
//         if (error) {
//             return res.status(500).json(error);
//         } else {
//             return res.json(response);
//         }
//     });
// });
app.get('/api/products', productsCtrl.read);
//  {
//     var query = req.query;
//     db.products.find(query, function(err, response) {
//         if (err) {
//             res.status(500).json(err);
//         } else {
//             res.json(response);
//         }
//     });
//
app.get('/api/products/:id', productsCtrl.readSpecific);
//     var idObj = req.params.id
//
//     db.products.findOne(idObj, function(err, response) {
//         if (err) {
//             res.status(500).json(err);
//         } else {
//             res.json(response);
//         }
//     });
// });
app.put('/api/products/:id', productsCtrl.update);
// {
//     if (!req.params.id) {
//         return res.status(400).send('id query needed');
//     }
//     var query = {
//         // _id: mongo.ObjectId(req.params.id)
//     };
//     db.products.update(query, req.body, function(error, response) {
//         if (error) {
//             return res.status(500).json(error);
//         } else {
//             return res.json(response);
//         }
//     });
// });
app.delete('/api/products/:id', productsCtrl.delete);
// {
//     if (!req.params.id) {
//         return res.status(400).send('id query needed');
//     }
//     var query = {
//         // _id: mongo.ObjectId(req.params.id)
//     };
//     db.products.remove(query, function(error, response) {
//         if (error) {
//             return res.status(500).json(error);
//         } else {
//             return res.json(response);
//         }
//     });
// });
app.listen(port, function() {
    console.log("Started server on port", port);
});
