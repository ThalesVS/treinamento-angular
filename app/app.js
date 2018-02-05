'use strict';

angular.module('app', [
  'ngRoute',
  'app.pokedex'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  // $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/pokedex'});
}]);
