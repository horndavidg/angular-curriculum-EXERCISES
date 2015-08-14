var app = angular.module("routeApp", ['ngRoute']);


app.config(function($routeProvider, $locationProvider) {

// $locationProvider.html5Mode(true);
    
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      })
      .when('/dogs', {
        templateUrl: 'partials/dogs.html',
        controller: 'DogsController'
      })
      .otherwise({ redirectTo: "/" });
});