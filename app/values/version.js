'use strict';

var angular = require('angular');
var versionDirectiveModuleName = require('../directives/version-directive');
var versionFilterModuleName = require('../filters/interpolate-filter');

module.exports = angular.module('myApp.version', [
  versionDirectiveModuleName, versionFilterModuleName
])

.value('version', '0.1')

.name;
