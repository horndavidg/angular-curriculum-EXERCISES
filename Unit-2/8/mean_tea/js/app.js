var app = angular.module("meanTeaApp", ['ngAnimate', 'ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'MainController'
      })
      .when('/show/:id', {
        templateUrl: 'partials/cart.html',
        controller: 'CartController'
      })
  
      .otherwise({ redirectTo: "/" });
}]);

