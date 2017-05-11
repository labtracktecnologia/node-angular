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
      var query = vm.busca ? { nome: vm.busca } : {}
      ClienteService.find(query)
        .success(function (data) {
          vm.clientes = data;
        });
    }

    function remover(cliente) {
      bootbox.confirm({
        message: 'Deseja realmente remover o cliente "' + cliente.nome + '"',
        buttons: {
          confirm: {
            label: 'Sim',
            className: 'btn-success'
          },
          cancel: {
            label: 'Não',
            className: 'btn-danger'
          }
        },
        callback: function(result) {
          if (result) {
            ClienteService.remove(cliente._id)
              .success(function () {
                activate();
              });
          }
        }
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