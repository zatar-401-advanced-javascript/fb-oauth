'use strict';
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const users = require('./users.js');

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

passport.use(new FacebookStrategy({
  clientID: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  callbackURL: "http://localhost:3000/oauth",
  profileFields: ['id', 'email', 'gender', 'link', 'locale', 'name', 'timezone', 'updated_time', 'verified'],
},

async function(accessToken, refreshToken, profile, cb) {
  try{
    let userRecord = {
      username: profile.id,
      password: 'oauthpassword'
    }
  
    let user = await users.save(userRecord);
    let token = users.generateToken(user);

    return cb(null,{user,token})
  }catch(error){
    cb(error, false, error.message)
  }
}
));

module.exports = passport;