'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:AktieEditCtrl
 * @description
 * # AktieEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('AktieEditCtrl', function (
  $scope,
  $routeParams,
  Aktier,
  $location
) {
  $scope.editAktie = true;
  $scope.aktie = {};
  Aktier.one($routeParams.id).get().then(function(aktie) {
    $scope.aktie = aktie;
    $scope.saveAktie = function() {
      $scope.aktie.save().then(function() {
        $location.path('/aktier/' + $routeParams.id);
      });
    };
  });
});
