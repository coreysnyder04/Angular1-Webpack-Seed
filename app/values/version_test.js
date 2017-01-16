'use strict';

var angular = require('angular').mock;
var moduleName = require('./version');

describe('The version module', function() {

  beforeEach(function() {
    angular.module(moduleName);
    angular.inject(function(version) {
      this.version = version;
    })
  });

  it('should return current version', function() {
    expect(this.version).toEqual('0.1');
  });

});
