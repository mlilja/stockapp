'use strict';
/**
 * @ngdoc function
 * @name clientApp.controller:AktierCtrl
 * @description
 * # AktierCtrl
 * Controller of the clientApp
 */
angular.module('clientApp').controller('AktierCtrl', function($scope, Aktier) {
    $scope.aktier = Aktier.getList().$object;
    console.log(Aktier.getList());
});