var express = require('express');

const router = express.Router()
var SignUp = require('../Model/signup');
router.post('/signup', function(req, res) {
    let userSignup = new SignUp({
      userName: req.body.userName,
      userEmail: req.body.userEmail,
      userPassword: req.body.userPassword
    });
  
    
    userSignup.save((err, user) => {
      if (err) {
        return res.json({success: false, err: err});
      }
  
      res.json({success: true, data: user});
    });
  });
  module.exports= router;