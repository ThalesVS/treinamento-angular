angular.module("app.pokedex").config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/pokedex', {
        templateUrl: 'pokedex/views/pokedex.view.html',
        controller: 'PokedexCtrl'
    });
}]);