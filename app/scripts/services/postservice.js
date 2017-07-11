'use strict';

/**
 * @ngdoc service
 * @name karachiMenSaloonApp.postService
 * @description
 * # postService
 * Service in the karachiMenSaloonApp.
 */
angular.module('karachiMenSaloonApp')
  .service('postService', function ($http, $q) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.mail = function(obj){
      var deffered = $q.defer();
      var data = {
        url : "",
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        data: obj
      };
      $http(data).then(function(res){
        deffered.resolve(res);
      },function(err){
        deffered.reject(err);
      });
      return deffered.promise;
    };
    this.subscribe = function(email){
      var deffered = $q.defer();
      var data = {
        url : "",
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        data: email
      };
      $http(data).then(function(res){
        deffered.resolve(res);
      },function(err){
        deffered.reject(err);
      });
      return deffered.promise;
    }

  });
