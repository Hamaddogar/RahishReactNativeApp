var express = require('express');
var dbconfiq = require('../server/db/dbconfig');
var bodyParser = require('body-parser');
let signupUser = require('../server/api/signup');
let loginUser = require('../server/api/login');


var app = express();

var PORT = 5000;

app.use(bodyParser.json());

app.use('/api/registeruser', signupUser);
app.use('/api/loginuser', loginUser);


app.get('/', function(req, res) {
  res.status(200).send('Hello world');
});

app.listen(PORT, function() {
  console.log('Server is running on PORT:', PORT);
});
