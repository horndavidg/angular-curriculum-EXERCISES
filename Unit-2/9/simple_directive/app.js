var app = angular.module('simpleDirectiveApp', [])
app.directive('gsAngularLogo', function() {
  return {
    restrict: 'E',
    templateUrl: 'logo.html'
    // template: '<img src="https://lh6.googleusercontent.com/-TlY7amsfzPs/T9ZgLXXK1cI/AAAAAAABK-c/Ki-inmeYNKk/w749-h794/AngularJS-Shield-large.png">'
  };
});