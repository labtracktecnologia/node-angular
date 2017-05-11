var http = require('http');
var app = require('./config/express');
var database = require('./config/database');

database('mongodb://localhost/curso');

http
  .createServer(app)
  .listen(8080, function(){
    console.log('Serviço iniciado na porta 8080');
  });
