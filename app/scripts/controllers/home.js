'use strict';

/**
 * @ngdoc function
 * @name karachiMenSaloonApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the karachiMenSaloonApp
 */
angular.module('karachiMenSaloonApp')
  .controller('HomeCtrl', function (dataUploadService, $rootScope) {
    var home = this;
    function initPage(){
      $rootScope.loader = true;
      $rootScope.overflow = "overflow";
     dataUploadService.homeData().then(function(data){
        data.forEach(function(elem, i){
          if(i==0){
            home.slider = elem.data;
          }
          if(i==1){
            home.about = elem.data[0].excerpt.rendered;
          }
          if(i==2){
            home.service_provider = elem.data;
          }
        });
        $rootScope.loader = false;
        $rootScope.overflow = "";
      });
    }
   initPage();



  });
