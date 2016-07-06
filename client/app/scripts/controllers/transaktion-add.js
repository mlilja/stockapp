'use strict';
/**
 * @ngdoc function
 * @name clientApp.controller:TransaktionAddCtrl
 * @description
 * # TransaktionAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp').controller('TransaktionAddCtrl', function($scope, $q, Transaktioner, Aktier, $location) {
    $scope.transaktion = {};
    $scope.saveTransaktion = function() {
        Transaktioner.post($scope.transaktion).then(function() {
            $location.path('/transaktioner');
        });
    };
    $scope.options = [];
    $scope.aktier = [];
    $scope.getSymboler = function(Aktier, callback) {
        var promise = Aktier.getList().then(function(response) {
            return callback(response);
        });
        return promise;
    };
    $scope.getOptions = function( callback) {
        var prom = $scope.getSymboler(Aktier, function(response) {
     		var option = {};
            angular.forEach(response, function(value, key) {
                option = {
                    id: key,
                    name: value.Symbol
                };
                $scope.options.push(option);
            });
            
        });
        $scope.aktier.push(prom);

        $q.all(prom).then(function() {
            callback();
        });
    };
    $scope.getOptions(function() {
    });

    $scope.symboler = {
        repeatSelect: null,
        availableOptions: $scope.options
    };
});