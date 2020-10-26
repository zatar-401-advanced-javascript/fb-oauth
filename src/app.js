'use strict';

// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const passport = require('./facebook');

// Esoteric Resources
// const oauth = require('./github.js');
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

// Prepare the express app
const app = express();

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
// App Level MW
app.use(cors());

// Website Files
app.use(express.static('./public'));

// Routes
app.get('/auth/facebook',
  passport.authenticate('facebook'));

app.get('/oauth',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function (req, res) {
    console.log(req.user)
    res.status(200).send(req.user);
  });

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`Server Up on ${port}`);
    });
  },
};
