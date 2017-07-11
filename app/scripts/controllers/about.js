'use strict';

/**
 * @ngdoc function
 * @name karachiMenSaloonApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the karachiMenSaloonApp
 */
angular.module('karachiMenSaloonApp')
  .controller('AboutCtrl', function (dataUploadService, $rootScope) {
    var about = this;
    function aboutDetail(){
      $rootScope.loader = true;
      $rootScope.overflow = "overflow";
    dataUploadService.getAbout().then(function(res){
      console.log(res);
      about.detail = res.data[0].content.rendered;
      $rootScope.loader = false;
      $rootScope.overflow = "";
    },function(err){
      console.log(err);
    });
    }
    aboutDetail();
  });
