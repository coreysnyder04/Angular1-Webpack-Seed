'use strict';

var angular = require('angular');

module.exports = angular.module('myApp.version.version-directive', [])

.directive('appVersion', ['version', function(version) {
  return function(scope, elm, attrs) {
    version = version;
    elm.text(version);
  };
}])

.name;
