(function() {
  'use strict';

  var app = angular.module('myApp.dex', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/dex', {
      templateUrl: 'dex/template/dex.template.html',
      controller: 'DexCtrl'
    });
  }])

  var DexCtrl = function($scope, DexService, PkmFactory) {
    
    var vm = this;
    
    var _range = Math.floor(Math.random() * Math.floor(151));
    var _urlImagePkm = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
    var _urlImageExtention = ".png";
    var _urlImageQuestion = "https://cdn.bulbagarden.net/upload/8/8e/Spr_3r_000.png";
    
    // lista dos seus pkm
    vm.myPkm = [];
    
    function _addImageToPkm(pkm){
      pkm.image = _urlImagePkm + pkm.id + _urlImageExtention;
      return pkm;
    }
    
    vm.catchPkm = function(){
      if(vm.myPkm.length != 6 && vm.search.image != _urlImageQuestion){
        vm.myPkm.push({
          id: parseInt(vm.search.id),
          image: vm.search.image,
          spicie: vm.search.spicie,
          nickname: vm.search.nickname ? vm.search.nickname : vm.search.spicie,
          type: vm.search.type,
          ability: vm.search.ability,
          isEdit: false
        });
      }
    }
    
    vm.searchPkm = function(lucky){
      if(vm.search.id == "" || vm.search.id == "?" ) {
        vm.search = {
          id: "?",
          spicie: "MissingNo",
          nickname: "Bug",
          type: "Glitch",
          image: "https://vignette.wikia.nocookie.net/pokemonzetaomicron/images/6/6c/657.png/revision/latest?cb=20140430200233"
        }
        return;
      }
      
      DexService.getPkm(vm.search.id)
      .then(function(results){
        vm.search = PkmFactory.searchPkm(results.data, lucky);
        return
      })
      .catch(function(error){
        if(error.data.detail == "Not found."){
          vm.search = {
            id: "",
            name: "",
            nickname:"",
            type:"Not found",
            image: _urlImageQuestion
          }
        }

      })
    }

    vm.searchClear = function() {
      vm.search = {
        id: "",
        spicie:"",
        nickname:"",
        type:"",
        image:_urlImageQuestion
      }
    }

    vm.release = function(id) {
      vm.myPkm.splice(id,1);
    }

    vm.edit = function(id){
      vm.myPkm[id].isEdit = !vm.myPkm[id].isEdit;
    }

    vm.changeName = function(name, id){
      vm.myPkm[id].nickname = name;
    }
    
    function _init(){
      vm.searchClear();
    }
    
    _init();
  };


app.controller("DexCtrl", ["$scope", "DexService", "PkmFactory", DexCtrl]);
  
}());