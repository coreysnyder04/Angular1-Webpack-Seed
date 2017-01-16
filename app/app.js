require('bootstrap/dist/css/bootstrap.css');

var angular = require('angular');
var angularRoute = require('angular-route');
var versionModule = require('values/version');
var viewsModule = require('./views/index.views');

// Declare app level module which depends on views, and components
angular.module('myApp', [
  angularRoute,
  viewsModule,
  versionModule
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
