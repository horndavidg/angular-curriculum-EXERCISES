


app.controller('BioController', function($scope){
$scope.message = "Welcome! you are in the BioController"
});

app.controller('ResumeController', function($scope){
    $scope.message = "ResumeContoller"
});

app.controller('ProjectsController', function($scope){
    $scope.message = "ProjectsContoller"
});

app.controller("LocationController", function($scope, $location) {
  $scope.$location = {};
  angular.forEach("protocol host port path search hash".split(" "), function(method){
   $scope.$location[method] = function(){
     var result = $location[method].call($location);
     return angular.isObject(result) ? angular.toJson(result) : result;
   };
  });
})