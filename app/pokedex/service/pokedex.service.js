(function() {
    "use strict";

    var pokedexService = function($http) {
        
      var _urlBase = "https://pokeapi.co/api/v2/";
      var _pathPkm = "pokemon/";

      var _getPkm = function(id){
       return $http.get(_urlBase + _pathPkm + id);
      }

      return {
        getPkm: _getPkm
      }
    }
    angular.module("app.pokedex").service("pokedexService", pokedexService);
})();