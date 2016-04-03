'use strict';

describe('Controller: AktieCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var AktieCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AktieCtrl = $controller('AktieCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AktieCtrl.awesomeThings.length).toBe(3);
  });
});
