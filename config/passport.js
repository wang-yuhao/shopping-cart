var passport = require('passport');
var User = require('../models/user');
var LocalStrategy = require('passport-local').Strategy;
var {check, validationResult} = require('express-validator');

passport.serializeUser(function(user, done){
    done(null, user.id);
});

passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        done(err, user);
    });
});

passport.use('local.signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
},
    function(req, username, password, done){
        const errors = validationResult(req).array()
        console.log(errors.length);
        if (errors.length>0) {
            var messages = [];
            for(i = 0; i < errors.length; i++){
                console.log(errors[i].msg);
                messages.push(errors[i].msg);
            }
         console.log(messages);
         return done(null, false, req.flash('error', messages));
        }

        User.findOne({'username': username}, function(err, user){
           if(err){
               console.log("err:"+err);
               return done(err);  
           }
           if(user){
               return done(null, false, {message: 'Email is already in use.'});
           }
           var newUser = new User();
           newUser.username = username;
           newUser.password = newUser.encryptPassword(password);
           newUser.save(function(err, result){
               if(err){
                   return done(err);
               }
               return done(null, newUser);
           });
      });
}));

passport.use('local.signin', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
},
    function(req, username, password, done){
        const errors = validationResult(req).array()
        console.log(errors.length);
        if (errors.length>0) {
            var messages = [];
            for(i = 0; i < errors.length; i++){
                console.log(errors[i].msg);
                messages.push(errors[i].msg);
            }
         console.log(messages);
         return done(null, false, req.flash('error', messages));
        }

        User.findOne({'username': username}, function(err, user){
           if(err){
               return done(err);  
           }
           if(!user){
               return done(null, false, {message: 'No user found.'});
           }
           if(!user.validPassword(password)){
               return done(null, false, {message: 'Wrong password.'});
           }
           return done(null, user);
           });
}));

