var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var _model = new Schema({
  documento: String,
  nome: String,
  email: String,
  telefone: String
});

_model.index({ '$**': 'text' });

mongoose.model('clientes', _model);
