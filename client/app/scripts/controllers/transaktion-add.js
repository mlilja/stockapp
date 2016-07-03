'use strict';
/**
 * @ngdoc function
 * @name clientApp.controller:TransaktionAddCtrl
 * @description
 * # TransaktionAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp').controller('TransaktionAddCtrl', function($scope, Transaktioner, Aktier, $location) {
    $scope.transaktion = {};
    $scope.saveTransaktion = function() {
        Transaktioner.post($scope.transaktion).then(function() {
            $location.path('/transaktioner');
        });
    };
    var log = [];
    Aktier.getList().then(function(response) {
        var list = response;
        angular.forEach(list, function(value, key) {
            //console.log(value.Symbol);
            log.push(value.Symbol);
        }, log);
        
    });
    console.log(log);

    $scope.symboler = {
        repeatSelect: null,
        availableOptions: [{
            id: '1',
            name: 'Option A'
        }, {
            id: '2',
            name: 'Option B'
        }, {
            id: '3',
            name: 'Option C'
        }],
    };
});