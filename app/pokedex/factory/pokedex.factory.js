(function () {
    "use strict";

    var PkmFactory = function () {

        var _urlImagePkm = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
        var _urlImageExtention = ".png";
        var _urlImageQuestion = "https://cdn.bulbagarden.net/upload/8/8e/Spr_3r_000.png";
        var _urlImageMissingNO = "https://vignette.wikia.nocookie.net/pokemonzetaomicron/images/6/6c/657.png/revision/latest?cb=20140430200233";
        var _urlImageLuckyPkm = "shiny/";

        var _makePkm = function(result, lucky){
            var _data = result.data;
            return {
                id: _data.id,
                spicie: _data.species.name,
                type: (_data.types.length < 2) ? _data.types[0].type.name :
                _data.types[1].type.name + "/" + _data.types[0].type.name ,
                image: lucky ? _urlImagePkm + _urlImageLuckyPkm + _data.id + _urlImageExtention : _urlImagePkm + _data.id + _urlImageExtention,
                ability: (_data.abilities.length < 2) ? _data.abilities[0].ability.name :
                _data.abilities[0].ability.name + "/" + _data.abilities[1].ability.name 
            };
        }

        var _errorPkm = function(error){
            var _data = error.data; 
            return {
                id: _data.id,
                spicie: _data.species.name,
                type: (_data.types.length < 2) ? _data.types[0].type.name :
                _data.types[1].type.name + "/" + _data.types[0].type.name ,
                image: _urlImageQuestion
            };
        }

        var _glitch = function(){
            return {
                id: "?",
                spicie: "MissingNo",
                nickname: "Bug",
                type: "Glitch",
                image: _urlImageMissingNO
              };
        }

        return {
            makePkm: _makePkm,
            errorPkm: _errorPkm,
            glitch: _glitch
        }
        
    }

    angular.module("app.pokedex").factory("PkmFactory", PkmFactory);
})();