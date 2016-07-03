'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:TransaktionDeleteCtrl
 * @description
 * # TransaktionDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('TransaktionDeleteCtrl', function (
  $scope,
  $routeParams,
  Transaktioner,
  $location
) {
  $scope.transaktion = Transaktioner.one($routeParams.id).get().$object;
  $scope.deleteTransaktion = function() {
    $scope.transaktion.remove().then(function() {
      $location.path('/transaktioner');
    });
  };
  $scope.back = function() {
    $location.path('/transaktion/' + $routeParams.id);
  };
});
