(function () {
  'use strict';

  angular
    .module('app')
    .controller('PedidoFormController', PedidoFormController);

  PedidoFormController.$inject = ['PedidoService', '$location', '$routeParams'];
  function PedidoFormController(PedidoService, $location, $routeParams) {
    var vm = this;
    vm.pedido = {};
    vm.titulo = 'Novo Pedido';

    vm.salvar = salvar;

    activate();

    ////////////////

    function activate() {
      if ($routeParams.id) {
        PedidoService.findById($routeParams.id)
          .success(function (data) {
            vm.pedido = data;
            vm.titulo = 'Editando Pedido';
          });
      }
    }

    function salvar() {
      PedidoService.save(vm.pedido)
        .success(function () {
          $location.path('/pedidos');
        });
    }
  }
})();