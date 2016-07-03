'use strict';

describe('Controller: TransaktionDeleteCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var TransaktionDeleteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TransaktionDeleteCtrl = $controller('TransaktionDeleteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TransaktionDeleteCtrl.awesomeThings.length).toBe(3);
  });
});
