const Auth0Strategy = require('passport-auth0');

module.exports = new Auth0Strategy({
  domain:       process.env.DOMAIN,
  clientID:     process.env.ID,
  clientSecret: process.env.SECRET,
  callbackURL:  '/api/auth/login'
  },
  function(accessToken, refreshToken, extraParams, profile, done) {
    console.log("------\nUser", profile, " has logged in\n-------");
    return done(null, profile);
  }
);