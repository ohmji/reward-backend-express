
var LineStrategy = require('passport-line-auth');
var jwt = require('jsonwebtoken');
var passport = require('passport')

module.exports = function() {
    passport.use(new LineStrategy({
        channelID: '1605628618',
        channelSecret: 'e4db4ec0b439aeaaef2653c7e72371bb',
        callbackURL: 'http://127.0.0.1:3000/login/line/return',
        scope: ['profile', 'openid', 'email'],
        botPrompt: 'normal'
      },
      function(accessToken, refreshToken, params, profile, cb) {
        const {email} = jwt.decode(params.id_token);
         console.log(accessToken)
        profile.email = email;
        return cb(null, profile);
      }));



}