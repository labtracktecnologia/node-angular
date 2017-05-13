(function () {
  'use strict';

  angular
    .module('app')
    .controller('PedidoFormController', PedidoFormController);

  PedidoFormController.$inject = ['PedidoService', '$location', '$routeParams', '$scope'];
  function PedidoFormController(PedidoService, $location, $routeParams, $scope) {
    var vm = this;
    vm.pedido = {};
    vm.titulo = 'Novo Pedido';

    vm.item = null;
    var itemSelecionado = -1;

    vm.salvar = salvar;
    vm.salvarItem = salvarItem;
    vm.adicionarItem = adicionarItem;
    vm.editarItem = editarItem;
    vm.removerItem = removerItem;

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

    function salvarItem() {
      vm.pedido.itens = vm.pedido.itens || [];
      vm.pedido.itens[itemSelecionado] = vm.item;
      itemSelecionado = -1;
      vm.item = null;
    }

    function adicionarItem() {
      vm.item = {}
      vm.modalTitulo = 'Novo Item'
      itemSelecionado = (vm.pedido.itens && vm.pedido.itens.length) || 0;
    }

    function editarItem(item) {
      itemSelecionado = vm.pedido.itens.indexOf(item);
      vm.modalTitulo = 'Editando Item'
      vm.item = angular.copy(item);
    }

    function removerItem(item) {
      confirmBox('Tem certeza que deseja remover o item', function () {
        let pos = vm.pedido.itens.indexOf(item);
        vm.pedido.itens.splice(pos, 1);
        $scope.$apply();
      });
    }
  }
})();