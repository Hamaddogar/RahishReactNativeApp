var express = require('express');

const router = express.Router();
var jwt = require('jsonwebtoken');
var SignUp = require('../Model/signup');
var secretKey = require('../db/jwtkey')
router.post('/login', function(req, res) {
  SignUp.findOne({userEmail: req.body.userEmail, userPassword: req.body.userPassword}).then((user)=>{

  if(user)
  {
    jwt.sign({user }, secretKey.secretKey, function(err, token) {
     
      res.json({success: true, data:'Bearer '+token });
    });

  }
  else{

    return res.json({success: false});
  }

  })
  //   SignUp.findOne(
  //     {
  //       userEmail: 'hgmail.com',
  //       userPassword: '1223333',
  //     },
  //     (err, user) => {
  //       if (err) {
  //         return res.json({success: false, err: err});
  //       } else {
  //         res.json({success: true, data: user});
  //       }
  //     },
  //   );
});
module.exports = router;
