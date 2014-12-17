'use strict';

angular.module('myApp.addition', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/addition', {
    templateUrl: 'addition/addition.html',
    controller: 'AdditionCtrl'
  });
}])

.controller('AdditionCtrl', [function() {

}]);