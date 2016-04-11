'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', ['ngRoute','restangular'
  ])
  .config(function ($routeProvider, RestangularProvider) {

    // Set the base URL for Restangular.
    RestangularProvider.setBaseUrl('http://localhost:3000');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/aktier', {
        templateUrl: 'views/aktier.html',
        controller: 'AktierCtrl'
      })
      .when('/create/aktie', {
        templateUrl: 'views/aktie-add.html',
        controller: 'AktieAddCtrl'
      })
      .when('/aktier/:id', {
        templateUrl: 'views/aktie-view.html',
        controller: 'AktieViewCtrl',
        controllerAs: 'aktieView'
      })
      .when('/aktier/:id/delete', {
        templateUrl: 'views/aktie-delete.html',
        controller: 'AktieDeleteCtrl',
        controllerAs: 'aktieDelete'
      })
      .when('/aktier/:id/edit', {
        templateUrl: 'views/aktie-edit.html',
        controller: 'AktieEditCtrl',
        controllerAs: 'aktieEdit'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('AktierRestangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  })
  .factory('Aktier', function(AktierRestangular) {
    return AktierRestangular.service('aktier');
  });