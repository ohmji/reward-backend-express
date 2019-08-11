
var express = require('express');
var passport = require('passport')
var router = express.Router();


/* GET home page. */


router.get('/', function(req, res) {
  res.render('index', { user: req.user });
});



router.get('/login/line', passport.authenticate('line'));


router.get('/login/line/return',
  passport.authenticate('line', {failureRedirect: '/'}),
  function(req, res) {
    res.redirect('/');
  });

module.exports = router;
