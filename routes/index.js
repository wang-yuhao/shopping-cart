var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var Cart = require('../models/cart');
var User = require('../models/user');
var Order = require('../models/order');
var { uuid } = require('uuidv4');
var category = "";
/* GET home page. */
router.get('/', function(req, res, next) {

/*adjust the data sequence to fit the mobil interface by change productChunks to docs */
     res.render('shop/index');
});
router.get('/return', function(req, res, next){
        res.redirect('/');
});

router.post('/admin', isLoggedIn, function(req, res, next){
    console.log("test");
    Order.updateOne({"paymentId": req.body.paymentId}, {$set: {"orderStatus": req.body.orderStatus}}, {multi: true}, function(err){
        if(err){
            return res.write('Error!');
        }
        res.redirect('/user/admin');
        
    });
});


/* GET second level page. */
router.get('/second-level/:category', function(req, res, next) {
  category = req.params.category;
  console.log(category);
  Product.find({category: category}, function(err, docs){
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


router.get('/reduce/:id', function(req, res, next){
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    cart.reduceByOne(productId);
    req.session.cart = cart;
    res.redirect('/shopping-cart');
});

router.get('/increase/:id',function(req, res, next){
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    cart.addByOne(productId);
    req.session.cart = cart;
    res.redirect('/shopping-cart');
});

router.get('/remove/:id', function(req, res, next){
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    cart.removeItem(productId);
    req.session.cart = cart;
    res.redirect('/shopping-cart');
});

router.get('/shopping-cart', function(req, res, next){
    if(!req.session.cart){
        return res.render('shop/shopping-cart', {products: null});
    }
    var cart = new Cart(req.session.cart);
    res.render('shop/shopping-cart',{products: cart.generateArray(), totalPrice: cart.totalPrice});
});

router.get('/dreamList', function(req, res, next){
    console.log("test dreamList post");
    User.find({},{dreamList: 1, username: 1}, function(err, dreamLists){
        if(err){
            return res.write('Error!');
        }
        console.log(dreamLists);
        res.render('shop/dream-list', {dreamLists: dreamLists});
    });
});

router.post('/dreamList', isLoggedIn, function(req, res, next){
//    console.log("test dreamList post");
//    console.log(req.user);
    var userId = req.user.id;
    var user= req.user;
    var name= req.body.name;
    var description= req.body.description;
    console.log(name);
//    var dreamPro = {"name": ${name}, "description": ${description}};
    User.updateOne({"_id": userId},{$push: {"dreamList": {"name":name, "description": description}}},{multi:1}, function(err){
        if(err){
            return res.write('Error!');
        }
        res.redirect('/dreamList');
    });
});

router.get('/advice', isLoggedIn, function(req, res, next){
        res.render('shop/advice');
});

router.get('/comment', isLoggedIn, function(req, res, next){
    Order.find({user: req.user}, function(err, orders){
        if(err){
            return res.write('Error!');
        }
        var cart;
        orders.forEach(function(order){
            cart = new Cart(order.cart);
            order.items = cart.generateArray();
        });
        res.render('user/advice', {orders: orders});
    });
});


router.get('/checkout',isLoggedIn, function(req, res, next){
    if (!req.session.cart){
        return res.redirect('/shopping-cart');
    }
    var cart = new Cart(req.session.cart);
    var paymentId = uuid();   
    var totalPrice = cart.totalPrice;
    if(totalPrice <= 1500){
        totalPrice = totalPrice + 500
    } 
    res.render('shop/checkout', {total: totalPrice, paymentId: paymentId});
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
        timestamp: timestamp,
        orderStatus: req.body.orderStatus
    });
    console.log(order);
    order.save(function(err){
        req.flash('success', 'Successfully bought product!');
        req.session.cart = null;
        res.redirect('/');
    });
});

router.post('/search', function(req, res, next){
    var replace = req.body.searchItem;
    var re = new RegExp(replace);
    Product.find({$or:[{title: re},{description: re}]}, function(err, products){
        res.render('shop/search-result', {title: 'search result', products: products, searchItem: replace});
    });
});

router.get('/search-add-to-cart/:id/:searchItem', function(req, res, next){
    var searchItem = req.params.searchItem;
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    Product.findById(productId, function(err, product){
        if(err){
            return res.redirect('/');
        }
        console.log("test2");
        cart.add(product, product.id);
        req.session.cart = cart;
    });

    var re = new RegExp(searchItem);
    Product.find({$or:[{title: re},{description: re}]}, function(err, products){
        res.render('shop/search-result', {title: 'search result', products: products, searchItem: searchItem});
    });
});

router.get('/product/:id', function(req, res, next){
    var productId = req.params.id;
    Product.findById(productId, function(err, product){
        if(err){
            return res.redirect('/second-level/'+category);
        }
        res.render('shop/product',{title: product.title, _id:product._id, imagePath:product.imagePath, desc:product.description, price:product.price, product: JSON.stringify(product)}); });
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
