'use strict';

describe('Controller: AktieDeleteCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var AktieDeleteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AktieDeleteCtrl = $controller('AktieDeleteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AktieDeleteCtrl.awesomeThings.length).toBe(3);
  });
});
