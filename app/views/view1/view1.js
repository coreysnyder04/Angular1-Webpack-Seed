'use strict';

var angular = require('angular');
var ngRoute = require('angular-route');

module.exports = angular.module('myApp.view1', [ngRoute])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'views/view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {

}])

.name;
