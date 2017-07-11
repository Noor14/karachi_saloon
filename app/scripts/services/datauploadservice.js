'use strict';

/**
 * @ngdoc service
 * @name karachiMenSaloonApp.dataUploadService
 * @description
 * # dataUploadService
 * Service in the karachiMenSaloonApp.
 */
angular.module('karachiMenSaloonApp')
  .service('dataUploadService', function ($http, $q) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.homeData = function () {
      return $q.all([this.getSlider(), this.getAbout(), this.serviceProvider()]);
    };

    this.getAbout = function(){
      var deffered = $q.defer();
    $http.get('http://thekarachimensaloon.com/dashboard/wp-json/wp/v2/about?').then(function(res){
      deffered.resolve(res);
    },function(err){
      deffered.reject(err);
    });
      return deffered.promise;
    };
    this.getSlider = function(){
      var deffered = $q.defer();
      $http.get('http://thekarachimensaloon.com/dashboard/wp-json/wp/v2/slider?').then(function(res){
        deffered.resolve(res);
      },function(err){
        deffered.reject(err);
      });
      return deffered.promise;
    };
    this.getPackages = function(){
      var deffered = $q.defer();
      $http.get('http://thekarachimensaloon.com/dashboard/wp-json/wp/v2/packages?').then(function(res){
        deffered.resolve(res);
      },function(err){
        deffered.reject(err);
      });
      return deffered.promise;
    };
    this.serviceProvider = function(){
      var deffered = $q.defer();
      $http.get('http://thekarachimensaloon.com/dashboard/wp-json/wp/v2/categories?slug=service_provider').then(function(res){
        if(res.data[0]._links["wp:post_type"][0].href){
         $http.get(res.data[0]._links["wp:post_type"][0].href).then(function(res){
           deffered.resolve(res);
        },function(err){
           deffered.reject(err);
         });
        }
      },function(err){
        deffered.reject(err);
      });
      return deffered.promise;
    }
  });
