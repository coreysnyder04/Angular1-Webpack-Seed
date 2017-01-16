'use strict';

var angular = require('angular').mock;
var moduleName = require('./view2.js');

describe('View2 controller', function() {

  beforeEach(function(){
    angular.module(moduleName);
    angular.inject(function($controller, $rootScope){
      this.$controller = $controller;
      this.$rootScope = $rootScope;
    });

    var scope = this.$rootScope.$new();
    this.ctrl = this.$controller('View2Ctrl', {
      $scope: scope
    });
  });

  it('has the right title', function() {
    expect(this.ctrl.title).toEqual('foo');
  });

});
