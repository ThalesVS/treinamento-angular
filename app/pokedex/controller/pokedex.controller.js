(function() {
  'use strict';

  var PokedexCtrl = function(pokedexService, PkmFactory) {
    
    var vm = this;
    
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
      if(vm.search.id === undefined || 
         isNaN(vm.search.id) ||
         (vm.search.spicie === undefined || vm.search.spicie === "")) {
        return;
      }

      vm.search.isEdit = false;
      if(vm.search.nickname == "" || vm.search.nickname == undefined){
        vm.search.nickname = vm.search.spicie;
      }
      
      vm.myPkm.push(vm.search)
      vm.searchClear();
    };
    
    vm.searchPkm = function(lucky){
      if(vm.search.id === "?" ) {
        vm.search = PkmFactory.glitch();
      }
      
      pokedexService.getPkm(vm.search.id)
      .then(function(result){
        vm.search = PkmFactory.makePkm(result);
      })
      .catch(function(err){
        vm.search = PkmFactory.errorPkm(result);
      })
      return;
    };

    vm.searchClear = function() {
      vm.search = {};
    };

    vm.release = function(id) {
      vm.myPkm.splice(id,1);
    };

    vm.edit = function(id){
      vm.myPkm[id].isEdit = !vm.myPkm[id].isEdit;
    };
    
    function _init(){
      vm.searchClear();
    }
    
    _init();
  };


angular.module('app.pokedex').controller("PokedexCtrl", ["pokedexService", "PkmFactory", PokedexCtrl]);

}());