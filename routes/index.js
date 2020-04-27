var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var Cart = require('../models/cart');
var Order = require('../models/order');
var { uuid } = require('uuidv4');
var category = "";
/* GET home page. */
router.get('/', function(req, res, next) {

/*adjust the data sequence to fit the mobil interface by change productChunks to docs */
     res.render('shop/index');
});

/* GET second level page. */
router.get('/second-level/:category', function(req, res, next) {
  category = req.params.category;
  console.log(category);
  Product.find({category: category}, function(err, docs){
  /*Product.find(function(err, docs){
      var productChunks = [];
      var chunkSize = 3;
      for (var i = 0; i < docs.length; i += chunkSize){
          productChunks.push(docs.slice(i, i + chunkSize));
      }
/*adjust the data sequence to fit the mobil interface by change productChunks to docs */
    res.render('shop/second-level', { title: 'Shopping cart', products: docs, category: category });
  });
});

router.get('/add-to-cart/:id', function(req, res, next){
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    Product.findById(productId, function(err, product){
    if(err){
        return res.redirect('/second-level/'+category);
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('/second-level/'+category);
    });
});

router.get('/shopping-cart', function(req, res, next){
    if(!req.session.cart){
        return res.render('shop/shopping-cart', {products: null});
    }
    var cart = new Cart(req.session.cart);
    res.render('shop/shopping-cart',{products: cart.generateArray(), totalPrice: cart.totalPrice});
});

router.get('/checkout',isLoggedIn, function(req, res, next){
    if (!req.session.cart){
        return res.redirect('/shopping-cart');
    }
    var cart = new Cart(req.session.cart);
    var paymentId = uuid();    
    res.render('shop/checkout', {total: cart.totalPrice, paymentId: paymentId});
});

router.post('/checkout', isLoggedIn, function(req, res, next){
    console.log("test1");
    if(!req.session.cart){
        return  res.redirect('/shopping-cart');
    }
    var cart = new Cart(req.session.cart);
    var timestamp = new Date();
    var order = new Order({
        user: req.user,
        cart: cart,
        address: req.body.address,
        name: req.body.name,
        paymentId: req.body.paymentId,
        timestamp: timestamp
    });
    console.log(order);
    order.save(function(err){
        req.flash('success', 'Successfully bought product!');
        req.session.cart = null;
        res.redirect('/');
    });
});

router.get('/product/:id', function(req, res, next){
    var productId = req.params.id;
    Product.findById(productId, function(err, product){
        if(err){
            return res.redirect('/second-level/'+category);
        }
        res.render('shop/product',{title: product.title, product: product});
    });
});

module.exports = router;

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    console.log("test");
    req.session.oldUrl = req.url;
    res.redirect('/user/signin');
}
