'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:AktieViewCtrl
 * @description
 * # AktieViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('AktieViewCtrl', function (
  	$scope,
  	$routeParams,
  	Aktier
  	) {
    $scope.viewAktie = true;
    $scope.aktie = Aktier.one($routeParams.id).get().$object;
  });
