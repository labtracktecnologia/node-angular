var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var _model = new Schema({
  numero: Number,
  emissao: {
    type: Date,
    default: Date.now
  },
  cliente: {
    type: Schema.Types.ObjectId,
    ref: 'clientes'
  },
  itens: [{
    codigo: String,
    descricao: String,
    preco: Number,
    quantidade: Number
  }]
});

mongoose.model('pedidos', _model);
