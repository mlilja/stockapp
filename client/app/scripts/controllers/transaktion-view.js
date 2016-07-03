'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:TransaktionViewCtrl
 * @description
 * # TransaktionViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('TransaktionViewCtrl', function (
  	$scope,
  	$routeParams,
  	Transaktioner
  	) {
    $scope.viewTransaktion = true;
    $scope.transaktion = Transaktioner.one($routeParams.id).get().$object;
  });
