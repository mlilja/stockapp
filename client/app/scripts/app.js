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
  .module('clientApp', ['ngRoute','restangular', 'angular.filter', 'ui.bootstrap'
  ,'ui.calendar'])
  .config(function ($routeProvider, RestangularProvider) {

    // Set the base URL for Restangular.
    RestangularProvider.setBaseUrl('http://localhost:8080');

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
      .when('/transaktioner', {
        templateUrl: 'views/transaktioner.html',
        controller: 'TransaktionerCtrl'
      })
      .when('/transaktion/:id', {
        templateUrl: 'views/transaktion-view.html',
        controller: 'TransaktionViewCtrl',
        controllerAs: 'transaktionView'
      })
      .when('/transaktion/:id/edit', {
        templateUrl: 'views/transaktion-edit.html',
        controller: 'TransaktionEditCtrl',
        controllerAs: 'transaktionEdit'
      })
      .when('/transaktion/:id/delete', {
        templateUrl: 'views/transaktion-delete.html',
        controller: 'TransaktionDeleteCtrl',
        controllerAs: 'transaktionDelete'
      })
      .when('/create/transaktion', {
        templateUrl: 'views/transaktion-add.html',
        controller: 'TransaktionAddCtrl',
        controllerAs: 'transaktionAdd'
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
  })
  .factory('TransaktionerRestangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  })
  .factory('Transaktioner', function(TransaktionerRestangular, Aktier) {
    return TransaktionerRestangular.service('transaktioner');
  });