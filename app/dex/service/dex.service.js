(function() {
    "use strict";

    var DexService = function($http) {
        var _baseUrl = "http://pokeapi.co/api/v2/";
    
        return {
            getPkm: function(id) {
              return $http.get(_baseUrl + "pokemon/" + id);          
            }
        }
      }
     
    angular.module("myApp.dex").service("DexService", DexService);
})();