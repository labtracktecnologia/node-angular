(function () {
  'use strict';

  angular
    .module('app')
    .controller('ClienteFormController', ClienteFormController);

  ClienteFormController.$inject = ['ClienteService', '$location', '$routeParams'];
  function ClienteFormController(ClienteService, $location, $routeParams) {
    var vm = this;
    vm.cliente = {};
    vm.titulo = 'Novo Cliente';

    vm.salvar = salvar;

    activate();

    ////////////////

    function activate() {
      if ($routeParams.id) {
        ClienteService.findById($routeParams.id)
          .success(function (data) {
            vm.cliente = data;
            vm.titulo = 'Editando Cliente'
          });
      }
    }

    function salvar() {
      ClienteService.save(vm.cliente)
        .success(function () {
          $location.path('/clientes')
        })
    }
  }
})();