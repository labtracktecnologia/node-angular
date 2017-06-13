(function() {
  'use strict';

  angular.module('app', [
    'ngRoute',
    'ui.bootstrap',
    'mgo-angular-wizard'
  ]).config(AppConfig);

  AppConfig.$inject = ['$routeProvider'];
  function AppConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
      })
      .when('/wizard', {
        templateUrl: 'partials/wizard.html',
        controller: 'WizardController',
        controllerAs: 'vm'
      })
      .when('/clientes', {
        templateUrl: 'partials/cliente-list.html',
        controller: 'ClienteListController',
        controllerAs: 'vm'
      })
      .when('/clientes/new', {
        templateUrl: 'partials/cliente-form.html',
        controller: 'ClienteFormController',
        controllerAs: 'vm'
      })
      .when('/clientes/:id', {
        templateUrl: 'partials/cliente-form.html',
        controller: 'ClienteFormController',
        controllerAs: 'vm'
      })
      .when('/pedidos', {
        templateUrl: 'partials/pedido-list.html',
        controller: 'PedidoListController',
        controllerAs: 'vm'
      })
      .when('/pedidos/new', {
        templateUrl: 'partials/pedido-form.html',
        controller: 'PedidoFormController',
        controllerAs: 'vm'
      })
      .when('/pedidos/:id', {
        templateUrl: 'partials/pedido-form.html',
        controller: 'PedidoFormController',
        controllerAs: 'vm'
      })
      .otherwise('/');
  }
})();