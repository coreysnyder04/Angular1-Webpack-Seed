'use strict';

var angular = require('angular');
var _ = require('underscore');

// Automagically crawls through this directory, finds every js file inside any
// subdirectory, minus the test files, and requires the resulting list of files,
// registering the exported module names as dependencies to the aver.demoApp.views module.
var context = require.context('.', true, /^(?!.*index).*\/(?!.*test).*\.js$/);

var moduleNames = _.chain(context.keys())
  .map(function(key) {
    return context(key)
  })
  .value();

module.exports = angular.module('aver.demoApp.views', moduleNames).name;
