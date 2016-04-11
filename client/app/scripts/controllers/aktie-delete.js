'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:AktieDeleteCtrl
 * @description
 * # AktieDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('AktieDeleteCtrl', function (
  $scope,
  $routeParams,
  Aktier,
  $location
) {
  $scope.aktie = Aktier.one($routeParams.id).get().$object;
  $scope.deleteAktie = function() {
    $scope.aktie.remove().then(function() {
      $location.path('/aktier');
    });
  };
  $scope.back = function() {
    $location.path('/aktie/' + $routeParams.id);
  };
});
