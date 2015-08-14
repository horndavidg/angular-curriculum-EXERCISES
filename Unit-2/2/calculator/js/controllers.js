

app.controller('MainController', function($scope, $route, $routeParams, $location){
    $scope.message = "HOME"
   
});


app.controller('AddController', function($scope, $route, $routeParams, $location){
    $scope.message = "Addition"
    $scope.paramsone = parseInt($routeParams.one);
    $scope.paramstwo = parseInt($routeParams.two);

});

app.controller('DivController', function($scope, $route, $routeParams, $location){
    $scope.message = "Division"
    $scope.paramsone = parseInt($routeParams.one);
    $scope.paramstwo = parseInt($routeParams.two);

});

app.controller("LocationController", function($scope, $route, $routeParams, $location) {
  $scope.$location = {};
  angular.forEach("protocol host port path search hash".split(" "), function(method){
   $scope.$location[method] = function(){
     var result = $location[method].call($location);
     return angular.isObject(result) ? angular.toJson(result) : result;
   };
  });
})