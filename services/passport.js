const passport = require('passport');
const GoogleStarategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');
const { access } = require('fs');

// Model User
const User = require('../models/User');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    });
});


passport.use(new GoogleStarategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/redirect',
  proxy: true //heroku proxy fix->  https://www.udemy.com/course/node-with-react-fullstack-web-development/learn/lecture/7604946#notes
  }, 
  (accessToken, refreshToken, profile, done) => {
    User.findOne({googleId: profile.id})
      .then((existingUser) => {
        if(existingUser) {
          done(null, existingUser);
        }else {
          new User({
            googleId: profile.id,
            username: profile.displayName,
            imageUrl: profile._json.picture
          })
            .save()
            .then( user => done(null, user));
        }
      });
  }

));