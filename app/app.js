'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.dex', 
  'myApp.view2'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  // $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/dex'});
}]);
