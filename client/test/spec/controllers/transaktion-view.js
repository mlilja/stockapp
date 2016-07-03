'use strict';

describe('Controller: TransaktionViewCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var TransaktionViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TransaktionViewCtrl = $controller('TransaktionViewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TransaktionViewCtrl.awesomeThings.length).toBe(3);
  });
});
