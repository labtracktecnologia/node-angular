(function () {
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
      var query = vm.busca ? { numero: vm.busca } : {}
      PedidoService.find(query)
        .success(function (data) {
          vm.pedidos = data;
          vm.pedidos.forEach(function(item) {
            item.getTotal = () => {
              return item.itens ? item.itens.reduce((prev, cur)=> prev + (cur.preco * cur.quantidade), 0) : 0;
            }
          });
        });
    }

    function remover(pedido) {
      confirmBox('Deseja realmente remover o pedido "' + pedido.numero + '"', function () {
        PedidoService.remove(pedido._id)
          .success(function () {
            activate();
          });
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