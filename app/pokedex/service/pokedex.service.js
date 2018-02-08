(function() {
    "use strict";

    var pokedexService = function($http) {
      var vm = this;
        
      var _urlBase = "https://pokeapi.co/api/v2/";
      var _pathPkm = "pokemon/";

      var myPkm = [];

      var _getPkm = function(id){
       return $http.get(_urlBase + _pathPkm + id);
      }

      var _getModel = function() {
        return myPkm;
      }

      var _setModel = function(pkm){
        myPkm = pkm;
      }


      return {
        getPkm: _getPkm,
        myPkm: {
          get: _getModel,
          set: _setModel
        }
      }
    }
    angular.module("app.pokedex").service("pokedexService", pokedexService);
})();