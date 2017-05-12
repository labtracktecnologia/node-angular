var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var generateSequence = require('../utils/generate-sequence');

var _model = new Schema({
  numero: String,
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

_model.pre('save', function (next) {
  var pedido = this;
  var anoAtual = new Date().getFullYear();
  if (pedido.isNew) {
    generateSequence('pedido', anoAtual)
      .then(function (sequencia) {
        pedido['numero'] = sequencia;
        next();
      });
  } else {
    next()
  }
})

mongoose.model('pedidos', _model);
