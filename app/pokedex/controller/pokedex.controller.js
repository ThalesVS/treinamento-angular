(function() {
  'use strict';

  var PokedexCtrl = function() {
    
    var vm = this;
    
    var _range = Math.floor(Math.random() * Math.floor(151));
    var _urlImagePkm = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
    var _urlImageExtention = ".png";
    var _urlImageQuestion = "https://cdn.bulbagarden.net/upload/8/8e/Spr_3r_000.png";
    var _urlImageMissingNO = "https://vignette.wikia.nocookie.net/pokemonzetaomicron/images/6/6c/657.png/revision/latest?cb=20140430200233";
    
    // lista dos seus pkm
    vm.myPkm = [];
    
    function _addImageToPkm(pkm){
      pkm.image = _urlImagePkm + pkm.id + _urlImageExtention;
      return pkm;
    }
    
    vm.catchPkm = function(){
        // implementar função de captura
        vm.searchClear();
    };
    
    vm.searchPkm = function(lucky){
      if(vm.search.id === "" || vm.search.id === "?" ) {
        vm.search = {
          id: "?",
          spicie: "MissingNo",
          nickname: "Bug",
          type: "Glitch",
          image: _urlImageMissingNO
        };
      }
      return;
      
      // implementar função de busca na api

    };

    vm.searchClear = function() {
      // implementar função para limpar os campos
    };

    vm.release = function(id) {
      // implementar função para liberar o pokemon
    };

    vm.edit = function(id){
      // implementar função para troca de flags
    };

    vm.changeName = function(name, id){
      // implementar função para troca de nome
    };
    
    function _init(){
      vm.searchClear();
    }
    
    _init();
  };


angular.module('app.pokedex').controller("PokedexCtrl", [PokedexCtrl]);

}());