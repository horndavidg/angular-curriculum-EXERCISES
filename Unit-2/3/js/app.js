var app = angular.module("firstApp", ['ngRoute']);


app.config(function($routeProvider) {

// Causes problems when trying to 
// manually manipulate the URL but takes out the '#'
// $locationProvider.html5Mode(true).hashPrefix('!');
    
    $routeProvider

     .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'MainController'
      })

      .otherwise({ redirectTo: "/" });
  });


