'use strict';

var angular = require('angular');
var ngRoute = require('angular-route');
var versionModule = require('values/version');

require('./view2.less');

module.exports = angular.module('myApp.view2', [ngRoute, versionModule])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'views/view2/view2.html',
    controller: 'View2Ctrl',
    controllerAs: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', function($scope) {
  $scope.scopeTitle = "I'm Your Scope Title";
  this.title = "foo";
}])

.name;
