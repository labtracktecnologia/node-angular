var mongoose = require('mongoose');
var pedidoModel = mongoose.model('pedidos');
var parseParams = require('../utils/parse-params');

module.exports = function(app) {
  app.get('/api/pedidos', function(req, resp) {
    pedidoModel.find(parseParams(req.query.filter), [], {sort: {emissao: 1}})
      .populate('cliente', 'nome telefone')
      .then(function(dados){
        resp.json(dados);
      }, function(erro) {
        resp.status(500).json(erro);
      })
  });
  app.post('/api/pedidos', function(req, resp) {
    pedidoModel.create(req.body)
      .then(function(dado) {
        resp.json(dado);
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });
  app.put('/api/pedidos/:id', function(req, resp) {
    pedidoModel.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
      .then(function(data) {
        resp.json(data);
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });
  app.delete('/api/pedidos/:id', function(req, resp) {
    pedidoModel.remove({_id: req.params.id})
      .then(function() {
        resp.sendStatus(204);
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });
  app.get('/api/pedidos/:id', function(req, resp) {
    pedidoModel.findById(req.params.id)
      .then(function(data) {
        resp.json(data);
      }, function(erro) {
        resp.status(500).json(erro);
      });
  });
}
