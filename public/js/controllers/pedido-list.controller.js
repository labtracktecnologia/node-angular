(function() {
'use strict';

  angular
    .module('app')
    .controller('PedidoListController', PedidoListController);

  PedidoListController.$inject = ['PedidoService'];
  function PedidoListController(PedidoService) {
    var vm = this;
    vm.pedidos = [];
    vm.busca = ''

    vm.remover = remover;
    vm.buscar = activate;

    activate();

    ////////////////

    function activate() {
      var query = vm.busca ? { nome: vm.busca } : {}
      PedidoService.find(query)
        .success(function (data) {
          vm.pedidos = data;
        });
    }

    function remover(pedido) {
      bootbox.confirm({
        message: 'Deseja realmente remover o pedido "' + pedido.numero + '"',
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
            PedidoService.remove(pedido._id)
              .success(function () {
                activate();
              });
          }
        }
      });

      // if (!confirm('Deseja realmente remover o pedido "' + pedido.numero + '"'))
      //   return;
      // PedidoService.remove(pedido._id)
      //   .success(function () {
      //     activate();
      //   });
    }

  }
})();