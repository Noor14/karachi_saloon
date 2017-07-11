'use strict';

/**
 * @ngdoc function
 * @name karachiMenSaloonApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the karachiMenSaloonApp
 */
angular.module('karachiMenSaloonApp')
  .controller('MainCtrl', function ($location, postService, toaster) {
    var main = this;
    main.getClass = function (path) {
      return ($location.path() === path) ? 'active' : '';
    };
    main.subscribeNow = function(){
      postService.subscribe(main.email).then(function(res){
        console.log(res,'Subscribed');
        toaster.display('Your Subscription has been done successfully');
        main.email = '';
      },function(err){
        toaster.display('You are not Subscribe yet');
        console.log(err,'Not Subscribed');
      })
    }

    main.loginPage = function(){
      window.location.assign("http://thekarachimensaloon.com/dashboard/wp-admin");
    }

  });
