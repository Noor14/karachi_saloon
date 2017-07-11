'use strict';

/**
 * @ngdoc overview
 * @name karachiMenSaloonApp
 * @description
 * # karachiMenSaloonApp
 *
 * Main module of the application.
 */
angular
  .module('karachiMenSaloonApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    //'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'slick',
    'toastr'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    //$locationProvider.hashPrefix('');
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('main', {
        templateUrl: 'views/main.html',
        url : '',
        abstract: true,
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .state('main.home', {
        templateUrl: 'views/home.html',
        url : '/',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .state('main.about', {
        templateUrl: 'views/about.html',
        url : '/about',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .state('main.service', {
      templateUrl: 'views/service.html',
      url : '/service',
      controller: 'ServicesCtrl',
      controllerAs: 'service'
    })
     .state('main.contact_us', {
        templateUrl: 'views/contactUs.html',
        url : '/conatct-us',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      });
  })
  .run(function($transitions) {
    angular.element(window).scrollTop(0);
    $transitions.onSuccess( {}, function() {
      angular.element(window).scrollTop(0);
      var navbarToggle = $('.navbar-toggle');
      if (navbarToggle.attr('aria-expanded') === 'true') {
        navbarToggle.click();
      }

    });

  });
