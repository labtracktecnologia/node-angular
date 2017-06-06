var mongoose = require('mongoose');
var clienteModel = mongoose.model('clientes');
var parseParams = require('../utils/parse-params');

module.exports = function (app) {
  app.get('/api/clientes', function (req, resp) {
    var fields = {
      score: { $meta: 'textScore' },
      _id: 1,
      documento: 1,
      nome: 1,
      email: 1,
      telefone: 1
    };
    clienteModel.find(parseParams(req.query.filter), fields, { sort: { score: {$meta: 'textScore'}, nome: 1 } })
      .then(function (dados) {
        resp.json(dados);
      }, function (erro) {
        resp.status(500).json(erro);
      })
  });
  app.post('/api/clientes', function (req, resp) {
    clienteModel.create(req.body)
      .then(function (dado) {
        resp.json(dado);
      }, function (erro) {
        resp.status(500).json(erro);
      });
  });
  app.put('/api/clientes/:id', function (req, resp) {
    clienteModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
      .then(function (data) {
        resp.json(data);
      }, function (erro) {
        resp.status(500).json(erro);
      });
  });
  app.delete('/api/clientes/:id', function (req, resp) {
    clienteModel.remove({ _id: req.params.id })
      .then(function () {
        resp.sendStatus(204);
      }, function (erro) {
        resp.status(500).json(erro);
      });
  });
  app.get('/api/clientes/:id', function (req, resp) {
    clienteModel.findById(req.params.id)
      .then(function (data) {
        resp.json(data);
      }, function (erro) {
        resp.status(500).json(erro);
      });
  });
}
