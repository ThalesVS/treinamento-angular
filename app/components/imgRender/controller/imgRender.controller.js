(function() {
'use strict';

var app = angular.module('myApp.myWidget', ['ngRoute'])

  function Directive() {
      var directive = {
          restrict: 'EA',
          templateUrl: 'imgRender/template/imRender.template.html',
          scope: {
              max: '='
          },
        //   link: linkFunc,
          controller: Controller,
            controllerAs: 'vm',
            bindToController: true // porque o escopo é isolado
        };

      return directive;

    //   function linkFunc(scope, el, attr, ctrl) {
    //       console.log('LINK: scope.min = %s *** should be undefined', scope.min);
    //       console.log('LINK: scope.max = %s *** should be undefined', scope.max);
    //       console.log('LINK: scope.vm.min = %s', scope.vm.min);
    //       console.log('LINK: scope.vm.max = %s', scope.vm.max);
    //   }
  }

//   Controller.$inject = ['$scope'];

  function Controller() {
      // Injecting $scope just for comparison
      var vm = this;

    //   vm.min = 3;

    //   console.log('CTRL: $scope.vm.min = %s', $scope.vm.min);
    //   console.log('CTRL: $scope.vm.max = %s', $scope.vm.max);
    //   console.log('CTRL: vm.min = %s', vm.min);
    //   console.log('CTRL: vm.max = %s', vm.max);
  }

app.directive("myWidget", Directive);


}());