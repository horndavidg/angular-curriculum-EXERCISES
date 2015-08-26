var app = angular.module('mouseOverDirectiveApp', [])

app.directive('gsChangeBackground', function() {
  return {
    
  	restrict: 'A',
  	
    link: function(scope, element, attrs) {

      var oldColor = element.css('background-color');
      var newColor = element.attr('new-color');

      element.on('mouseenter', function(event) {
        element.css('background-color', newColor);
      })

      element.on('mouseleave', function(event) {
        element.css('background-color', oldColor);
      })

    }
  };
});

app.directive('gsChangeText', function() {
  return {

    restrict: 'A',

    link: function(scope, element, attrs) {

      var oldTextColor = element.css('color');
      var newTextColor = element.attr('new-text-color');

      element.on('mouseenter', function(event) {
        element.css('color', newTextColor);
      })

      element.on('mouseleave', function(event) {
        element.css('color', oldTextColor);
      })

    }
  };
});