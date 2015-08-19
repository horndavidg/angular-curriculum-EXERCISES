
app.controller("MovieController", function($scope, $http, $location, $rootScope, $route, $routeParams){
 
  
$scope.searchTitle = "";

// ------------------------------------------

$scope.SearchMovie = function(){
  
  $http.get('http://www.omdbapi.com/?s=' + $scope.searchTitle.toString()).then(function(data){
     // console.log($scope.searchTitle)
     $rootScope.moviesData = data.data.Search;
     $scope.searchTitle = "";
     $location.url('/home');

 },
		// Response if there is an error
		function(err)	{
		 $scope.err = err;
 	}); 
 };


$scope.ShowMovie = function(){


  $http.get('http://www.omdbapi.com/?i=' + this.data.imdbID.toString()).then(function(data){
        console.log(data.data)
     $rootScope.movieData = data.data;
  
     $location.url('/show');

 },
    // Response if there is an error
    function(err) {
     $scope.err = err;
  }); 
 };

















});

// app.controller('BioController', function($scope){
// $scope.message = "Welcome! you are in the BioController"
// });

// app.controller('ResumeController', function($scope){
//     $scope.message = "ResumeContoller"
// });

// app.controller('ProjectsController', function($scope){
//     $scope.message = "ProjectsContoller"
// });

app.controller("LocationController", function($scope, $location) {
  $scope.$location = {};
  angular.forEach("protocol host port path search hash".split(" "), function(method){
   $scope.$location[method] = function(){
     var result = $location[method].call($location);
     return angular.isObject(result) ? angular.toJson(result) : result;
   };
  });
})