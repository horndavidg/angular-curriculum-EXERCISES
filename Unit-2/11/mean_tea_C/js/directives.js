app.directive('dhCaffeineMeter', function() {
  return {
    
  	restrict: 'E',
  	templateUrl: 'caffeine-chart.html',
    scope: {

      caff: '=caffeinemg'
    
      },

    link: function(scope, element, attrs) {
      

    }
  };
});