'use strict';

describe('Controller: AktieViewCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var AktieViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AktieViewCtrl = $controller('AktieViewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AktieViewCtrl.awesomeThings.length).toBe(3);
  });
});
