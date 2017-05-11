(function() {
'use strict';

  angular
    .module('app')
    .controller('MainController', MainController);

  MainController.$inject = ['$route'];
  function MainController($route) {
    var vm = this;
    

    activate();

    ////////////////

    function activate() { }
  }
})();