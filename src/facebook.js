'use strict';
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const users = require('./users.js');
// const express = require('express');
// const app = express();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

passport.use(new FacebookStrategy({
  clientID: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  callbackURL: "http://localhost:3000/oauth"
},

function(accessToken, refreshToken, profile, cb) {
  return profile
}
));

app.get('/auth/facebook',
  passport.authenticate('facebook'));

app.get('/oauth',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });