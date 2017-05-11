var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var _model = new Schema({
  documento: String,
  nome: String,
  email: String,
  telefone: String
});

mongoose.model('clientes', _model);
