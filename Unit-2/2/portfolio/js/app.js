var app = angular.module("portfolioApp", ['ngRoute']);


app.config(function($routeProvider, $locationProvider) {

// $locationProvider.html5Mode(true);
$locationProvider.html5Mode(true).hashPrefix('!');
    
    $routeProvider
      .when('/bio', {
        templateUrl: 'partials/bio.html',
        controller: 'BioController'
      })
      .when('/resume', {
        templateUrl: 'partials/resume.html',
        controller: 'ResumeController'
      })
       .when('/projects', {
        templateUrl: 'partials/projects.html',
        controller: 'ProjectsController'
      })
      .otherwise({ redirectTo: "/bio" });
});