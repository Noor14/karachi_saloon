'use strict';

/**
 * @ngdoc function
 * @name karachiMenSaloonApp.controller:ServicesCtrl
 * @description
 * # ServicesCtrl
 * Controller of the karachiMenSaloonApp
 */
angular.module('karachiMenSaloonApp')
  .controller('ServicesCtrl', function (dataUploadService,$rootScope) {
    var service = this;

    function allPackages(){
      $rootScope.loader = true;
      $rootScope.overflow = "overflow";
    dataUploadService.getPackages().then(function(res){
      service.packages = res.data;
      $rootScope.loader = false;
      $rootScope.overflow = "";
    },function(err){
      console.log(err);
    });
    }
    allPackages();
  });
