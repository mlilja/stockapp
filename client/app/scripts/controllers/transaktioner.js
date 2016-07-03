'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:TransaktionerCtrl
 * @description
 * # TransaktionerCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('TransaktionerCtrl', function (
    $scope,
    Transaktioner
  ) {
    $scope.transaktioner = Transaktioner.getList().$object;
    //$scope.transaktioner = _.groupBy(Transaktioner, 'Namn');
  });
