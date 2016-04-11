'use strict';

describe('Controller: AktieAddCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var AktieAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AktieAddCtrl = $controller('AktieAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AktieAddCtrl.awesomeThings.length).toBe(3);
  });
});
