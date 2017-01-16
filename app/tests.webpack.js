// This file is an entry point for angular tests
// Avoids some weird issues when using webpack + angular.

require('angular');
require('angular-route/angular-route');
require('angular-mocks/angular-mocks');

var context = require.context('.', true, /test\.js$/);
context.keys().forEach(context);
