
// app.controller("MovieController", ['$scope', '$http', '$location', '$rootScope', '$route', '$routeParams', function($scope, $http, $location, $rootScope, $route, $routeParams){
  
// $scope.searchTitle = "";

// $scope.SearchMovie = function(){
  
//   $http.get('http://www.omdbapi.com/?s=' + $scope.searchTitle.toString()).then(function(data){
//      $rootScope.moviesData = data.data.Search;
//      $scope.searchTitle = "";
//      $location.url('/home');

//  },
// 		function(err)	{
// 		 $scope.err = err;
//  	}); 
//  };

// $scope.ShowMovie = function(){
//   $http.get('http://www.omdbapi.com/?i=' + this.data.imdbID.toString()).then(function(data){
     
//      $rootScope.movieData = data.data;
  
//      $location.url('/show');

//  },
    
//     function(err) {
//      $scope.err = err;
//   }); 
//  };
// }]);

// app.controller("LocationController", ['$scope', '$location', function($scope, $location) {
//   $scope.$location = {};
//   angular.forEach("protocol host port path search hash".split(" "), function(method){
//    $scope.$location[method] = function(){
//      var result = $location[method].call($location);
//      return angular.isObject(result) ? angular.toJson(result) : result;
//    };
//   });
// }]);

app.controller("MovieController",["$scope","$http","$location","$rootScope","$route","$routeParams",function(o,t,a,n){o.searchTitle="",o.SearchMovie=function(){t.get("http://www.omdbapi.com/?s="+o.searchTitle.toString()).then(function(t){n.moviesData=t.data.Search,o.searchTitle="",a.url("/home")},function(t){o.err=t})},o.ShowMovie=function(){t.get("http://www.omdbapi.com/?i="+this.data.imdbID.toString()).then(function(o){n.movieData=o.data,a.url("/show")},function(t){o.err=t})}}]),app.controller("LocationController",["$scope","$location",function(o,t){o.$location={},angular.forEach("protocol host port path search hash".split(" "),function(a){o.$location[a]=function(){var o=t[a].call(t);return angular.isObject(o)?angular.toJson(o):o}})}]);