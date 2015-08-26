var app = angular.module('carouselApp', [])

app.directive('photoCarousel', function() {
  
  return {
    
  	restrict: 'A',
    templateUrl: 'photo.html',
  	
    link: function(scope, element, attrs) {

      scope.photoArray = JSON.parse(element.attr('use-photos'));
      scope.num = 0;
      scope.numFirst = scope.photoArray.length - 2;
      scope.numSecond = scope.photoArray.length - 1;
      scope.numFourth = scope.num + 1;
      scope.numFifth = scope.num + 2;

      scope.forward = function() {

      if (scope.num < scope.photoArray.length - 1) {
          scope.num += 1;
        } else {
          scope.num = 0;
        };
        
        if (scope.numFirst < scope.photoArray.length - 1) {
          scope.numFirst += 1;
        } else {
          scope.numFirst = 0;
        };

        if (scope.numSecond < scope.photoArray.length - 1) {
          scope.numSecond += 1;
        } else {
          scope.numSecond = 0;
        };

        if (scope.numFourth < scope.photoArray.length - 1) {
          scope.numFourth += 1;
        } else {
          scope.numFourth = 0;
        };

       if (scope.numFifth < scope.photoArray.length - 1) {
          scope.numFifth += 1;
        } else {
          scope.numFifth = 0;
        };

      };


      scope.back = function() {

       if (scope.num > 0) {
          scope.num -= 1;
        } else {
          scope.num = scope.photoArray.length - 1;
        }

       if (scope.numFirst > 0) {
          scope.numFirst -= 1;
        } else {
          scope.numFirst = scope.photoArray.length - 1;
        };

        if (scope.numSecond > 0) {
          scope.numSecond -= 1;
        } else {
          scope.numSecond = scope.photoArray.length - 1;
        };

        if (scope.numFourth > 0) {
          scope.numFourth -= 1;
        } else {
          scope.numFourth = scope.photoArray.length - 1;
        };

        if (scope.numFifth > 0) {
          scope.numFifth -= 1;
        } else {
          scope.numFifth = scope.photoArray.length - 1;
        };
       
      };

    }
  };
});