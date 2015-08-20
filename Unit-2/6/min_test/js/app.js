// var app = angular.module("imdbApp", ['ngRoute']);


// app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    
//     $routeProvider
//       .when('/', {
//         templateUrl: 'partials/home.html',
//         controller: 'MovieController'
//       })
//       .when('/show', {
//         templateUrl: 'partials/show.html',
//         controller: 'MovieController'
//       })
  
//       .otherwise({ redirectTo: "/" });
// }]);

var app=angular.module("imdbApp",["ngRoute"]);app.config(["$routeProvider","$locationProvider",function(o){o.when("/",{templateUrl:"partials/home.html",controller:"MovieController"}).when("/show",{templateUrl:"partials/show.html",controller:"MovieController"}).otherwise({redirectTo:"/"})}]);