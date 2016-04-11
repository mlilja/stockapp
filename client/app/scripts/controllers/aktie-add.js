'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:AktieAddCtrl
 * @description
 * # AktieAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('AktieAddCtrl', function ($scope,
  Aktier,
  $location
) {
  $scope.aktie = {};
  $scope.saveAktie = function() {
    Aktier.post($scope.aktie).then(function() {
      $location.path('/aktier');
    });
  };
});
