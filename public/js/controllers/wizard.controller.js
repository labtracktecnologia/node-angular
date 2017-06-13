(function () {
  'use strict';

  angular
    .module('app')
    .controller('WizardController', WizardController);

  WizardController.$inject = ['$location']

  function WizardController($location) {
    var vm = this;
    vm.steps = [];
    vm.model = {};
    vm.gravar = gravar;

    activate();

    ////////////////

    function activate() {
      vm.steps = [
        {
          _id: '1',
          tema: 'Teste 1',
          opcoes: ["opção 1", "opção 2", "opção 3"]
        },
        {
          _id: '2',
          tema: 'Teste 2',
          opcoes: ["opção 1", "opção 2"]
        },
        {
          _id: '3',
          tema: 'Teste 3',
          opcoes: ["opção 1", "opção 2", "opção 3", "opção 4"]
        }
      ]
    }

    function gravar() {
      alert('Teste de finalização!!!');
      $location.path('/');
    }
  }


})();