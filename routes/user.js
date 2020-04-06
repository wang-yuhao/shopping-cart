var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport');
var { check, validationResult } = require('express-validator');
var csrfProtection  = csrf();

router.use(csrfProtection);

router.get('/profile', isLoggedIn, function(req, res, next){
    res.render('user/profile');
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
  check('email').notEmpty().isEmail().withMessage('Invalid Email'),
  // password must be at least 5 chars long
  check('password').notEmpty().isLength({ min: 5 })
],passport.authenticate('local.signup', {
    successRedirect: '/user/profile',
    failureRedirect: '/user/signup',
    failureFlash: true
}));

router.get('/signupreplace', function(req, res, next){
    res.render('user/signupreplace');
});

router.get('/signin', function(req, res, next){
   var messages = req.flash('error');
   res.render('user/signin', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
});

router.post('/signin', [
  // email must be an email
  check('email').isEmail().withMessage('Invalid Email'),
  // password must be at least 5 chars long
  check('password').isLength({ min: 5 })
],passport.authenticate('local.signin', {
    successRedirect: '/user/profile',
    failureRedirect: '/user/signin',
    failureFlash: true
}));

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
