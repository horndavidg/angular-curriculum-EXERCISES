var app = angular.module("imdbApp", ['ngRoute']);


app.config(function($routeProvider, $locationProvider) {

 // $locationProvider.html5Mode(true).hashPrefix('!');
    
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'MovieController'
      })
      .when('/show', {
        templateUrl: 'partials/show.html',
        controller: 'MovieController'
      })
  
      .otherwise({ redirectTo: "/" });
});