var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport');
var Order = require('../models/order');
var Cart = require('../models/cart');
var Advice = require('../models/advice');
var Dreamlist = require('../models/dreamlist');
var User = require('../models/user');
var { check, validationResult } = require('express-validator');
var csrfProtection  = csrf();

router.use(csrfProtection);

router.get('/admin', isLoggedIn, function(req, res, next){
    Order.find({}, function(err, orders){
        if(err){
            return res.write('Error!');
        }
        var cart;
        orders.forEach(function(order){
            cart = new Cart(order.cart);
            order.items = cart.generateArray();
        });
        res.render('user/admin', {orders: orders});
    });
});

router.get('/profile', isLoggedIn, function(req, res, next){
    Order.find({user: req.user}, function(err, orders){
        if(err){
            return res.write('Error!');
        }
        var cart;
        orders.forEach(function(order){
            cart = new Cart(order.cart);
            order.items = cart.generateArray();
        });
        res.render('user/profile', {orders: orders});
    });
});


router.get('/logout', isLoggedIn, function(req, res, next){
    req.logout();
    res.redirect('/');
});

router.use('/', notLoggedIn, function(req, res, next){
    req.next();
});

router.get('/signup', function(req, res, next){
   var messages = req.flash('error');
   res.render('user/signup', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
});

router.post('/signup', [
  // email must be an email
  //check('email').notEmpty().isEmail().withMessage('Invalid Email'),
  //check('username').isLength({ min: 5 }),
  // password must be at least 5 chars long
  check('password').notEmpty().isLength({ min: 5 })
],passport.authenticate('local.signup', {
    failureRedirect: '/user/signup',
    failureFlash: true
}), function(req, res, next){
    if (req.session.oldUrl){
        var oldUrl = req.session.oldUrl;
        req.session.oldUrl = null;
        res.redirect(oldUrl);
    }else{
        res.redirect('/user/profile');
    }
});

router.get('/signupreplace', function(req, res, next){
    res.render('user/signupreplace');
});

router.get('/signin', function(req, res, next){
   var messages = req.flash('error');
   res.render('user/signin', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
});

router.post('/signin', [
  // email must be an email
  // check('email').isEmail().withMessage('Invalid Email'),
  // password must be at least 5 chars long
  //check('username').isLength({ min: 5 }),
  check('password').isLength({ min: 5 })
],passport.authenticate('local.signin', {
    failureRedirect: '/user/signin',
    failureFlash: true
}), function(req, res, next){
    if (req.session.oldUrl){
        var oldUrl = req.session.oldUrl;
        req.session.oldUrl = null;
        res.redirect(oldUrl);
    } else if(req.body.username  == "admin"){
        res.redirect('/user/admin');
    } 
    else{
        res.redirect('/user/profile');
    }
});

module.exports = router;

function isLoggedIn(req, res, next){
    if (req.isAuthenticated()){
        return next();
    }
    res.redirect('/');
}

function notLoggedIn(req, res, next){
    if (!req.isAuthenticated()){
        return next();
    }
    res.redirect('/');
}
