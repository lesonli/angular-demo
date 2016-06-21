'use strict';

angular.module('myApp.view1', ['ngRoute','ngCookies'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','$cookieStore',function($scope,$cookieStore) {
  $cookieStore.put("name","my name");
  //$cookieStore.get("name");
  //$cookieStore.get("__ngDebug");

  $cookieStore.put("person", {
    name: "my name",
    age: 18
  });

  $scope.person = $cookieStore.get("person");
}]);