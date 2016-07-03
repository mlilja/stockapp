'use strict';

describe('Controller: TransaktionEditCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var TransaktionEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TransaktionEditCtrl = $controller('TransaktionEditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TransaktionEditCtrl.awesomeThings.length).toBe(3);
  });
});
