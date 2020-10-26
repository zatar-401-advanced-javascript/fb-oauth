'use strict';

// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

// Esoteric Resources
const oauth = require('./github.js');
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

// Prepare the express app
const app = express();

// App Level MW
app.use(cors());

// Website Files
app.use(express.static('./public'));
// app.get('/',(req,res) =>{
//   res.send('test');
// })

// Routes
// app.get('/oauth', oauth, (req, res) => {
//   res.status(200).send(req.token);
// });



passport.use(new FacebookStrategy({
  clientID: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  callbackURL: "http://localhost:3000/oauth"
},

async function(accessToken, refreshToken, profile, cb) {
  try{
    console.log(profile)
    return cb(null,profile);
  }catch(error){
    cb(error, false, error.message)
  }
  // return cb('test', profile);
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

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`Server Up on ${port}`);
    });
  },
};
