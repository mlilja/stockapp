'use strict';

describe('Controller: TransaktionAddCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var TransaktionAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TransaktionAddCtrl = $controller('TransaktionAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TransaktionAddCtrl.awesomeThings.length).toBe(3);
  });
});
