'use strict';

var angular = require('angular');
var _ = require('underscore');

// Automagically crawls through this directory, finds every js file inside any
// subdirectory, removes test files, and requires the resulting list of files,
// registering the exported module names as dependencies to the myApp.views module.
var context = require.context('.', true, /\/.*\/.*\.js$/);
var moduleNames = _.chain(context.keys())
  .filter(function(key) {
    return key.indexOf('_test.js') == -1;
  })
  .map(function(key) {
    return context(key)
  })
  .value();

module.exports = angular.module('myApp.views', moduleNames).name;
