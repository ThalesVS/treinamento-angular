(function () {
    "use strict";

    var PkmFactory = function () {
        var _urlImagePkm = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
        var _urlImageExtention = ".png";

        function _searchPkm(pkm, lucky) {
            var _type = pkm.types[0].type.name;
            var _ability = pkm.abilities[0].ability.name;

            if (pkm.types.length > 1) {
                _type = pkm.types[1].type.name + "/" + pkm.types[0].type.name;
            }

            if (pkm.abilities.length > 1) {
                _ability = pkm.abilities[1].ability.name + "/" + pkm.abilities[0].ability.name;
            }

            return {
                id: pkm.id,
                spicie: pkm.name,
                nickname: "",
                type: _type,
                ability: _ability,
                image: lucky ?
                    _urlImagePkm + "shiny/" + pkm.id + _urlImageExtention
                    : _urlImagePkm + pkm.id + _urlImageExtention
            }
        }

        return {
            searchPkm: _searchPkm
        }
    }

    angular.module("myApp.dex").factory("PkmFactory", PkmFactory);
})();