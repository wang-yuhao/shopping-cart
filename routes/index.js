var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var Cart = require('../models/cart');

/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find(function(err, docs){
      var productChunks = [];
      var chunkSize = 3;
      for (var i = 0; i < docs.length; i += chunkSize){
          productChunks.push(docs.slice(i, i + chunkSize));
      }
/*adjust the data sequence to fit the mobil interface by change productChunks to docs */
     res.render('shop/index', { title: 'Shopping cart', products: docs });
  });
});

/* GET home page. */
router.get('/shop/home', function(req, res, next) {

/*adjust the data sequence to fit the mobil interface by change productChunks to docs */
     res.render('shop/home');
});

router.get('/add-to-cart/:id', function(req, res, next){
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    Product.findById(productId, function(err, product){
    if(err){
        return res.redirect('/');
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('/');
    });
});

module.exports = router;

