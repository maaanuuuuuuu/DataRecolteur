'use strict';

angular.module('myApp.measure', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/measure', {
    templateUrl: 'measure/measure.html',
    controller: 'MeasureCtrl'
  });
}])

.controller('MeasureCtrl', [function() {

}]);