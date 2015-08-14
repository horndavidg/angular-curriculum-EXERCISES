var app = angular.module("calculatorApp", ['ngRoute']);


app.config(function($routeProvider, $locationProvider) {

// Causes problems when trying to 
// manually manipulate the URL but takes out the '#'
// $locationProvider.html5Mode(true).hashPrefix('!');
    
    $routeProvider

     .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'MainController'
      })
      .when('/add/:one/:two', {
        templateUrl: 'partials/add.html',
        controller: 'AddController'
      })
      .when('/div/:one/:two', {
        templateUrl: 'partials/div.html',
        controller: 'DivController'
      })
      .otherwise({ redirectTo: "/" });
  });