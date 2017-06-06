(function () {
  'use strict';

  angular
    .module('app')
    .controller('ClienteListController', ClienteListController);

  ClienteListController.$inject = ['ClienteService']
  function ClienteListController(ClienteService) {
    var vm = this;
    vm.clientes = [];
    vm.busca = ''

    vm.remover = remover;
    vm.buscar = activate;

    activate();

    ////////////////

    function activate() {
      var query = vm.busca ? { $text: { $search: vm.busca } } : {}
      ClienteService.find(query)
        .success(function (data) {
          vm.clientes = data;
        });
    }

    function remover(cliente) {
      confirmBox('Deseja realmente remover o cliente "' + cliente.nome + '"', function () {
        ClienteService.remove(cliente._id)
          .success(function () {
            activate();
          });
      });

      // if (!confirm('Deseja realmente remover o cliente "' + cliente.nome + '"'))
      //   return;
      // ClienteService.remove(cliente._id)
      //   .success(function () {
      //     activate();
      //   });
    }

  }
})();