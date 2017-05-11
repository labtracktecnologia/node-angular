var express = require('express');
var bodyParser = require('body-parser');
var consign = require('consign');

var app = express();

app.use(express.static('./public'));
app.use(bodyParser.json());

consign()
  .include('models')
  .then('resources')
  .into(app);

module.exports = app;
