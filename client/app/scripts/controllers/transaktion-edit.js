'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:TransaktionEditCtrl
 * @description
 * # TransaktionEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('TransaktionEditCtrl', function (
  $scope,
  $routeParams,
  Transaktioner,
  $location
) {
  $scope.transaktion = {};
  Transaktioner.one($routeParams.id).get().then(function(transaktion) {
    $scope.transaktion = transaktion;
    $scope.saveTransaktion = function() {
      $scope.transaktion.save().then(function() {
        $location.path('/transaktion/' + $routeParams.id);
      });
    };
  });
});
