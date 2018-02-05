(function() {
    "use strict";

    var pokedexService = function($http) {
        var _baseUrl = "http://pokeapi.co/api/v2/";
    
        return {
            getPkm: function(id) {
              return $http.get(_baseUrl + "pokemon/" + id);          
            }
        }
      }
     
    angular.module("app.pokedex").service("pokedexService", pokedexService);
})();