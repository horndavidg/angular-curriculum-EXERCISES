app.controller("MainController", function($scope, $http){

// $http.get('https://api.github.com/zen').then(function(data){
//     $scope.zenData = data.data;
// });

// $http.get('https://itunes.apple.com/search?term=jack+johnson').then(function(data){
//     $scope.itunesData = data;
// });

$http.get('../itunes.json').then(function(data){
   
        $scope.itunesData = data.data.results;
    
 },
		// Response if there is an error
		function(err)	{
			$scope.err = err;
 	});
              

// Bad URL with error handling 

// $http.get('https://itunes.apple.com/searchmdemdekmk').then(function(data){
//      $scope.itunesData = data;
//  },
// 		// Response if there is an error
// 		function(response)	{
// 			$scope.response = response;
//  	});
              

});



// app.controller("LocationController", function($scope, $location) {
//   $scope.$location = {};
//   angular.forEach("protocol host port path search hash".split(" "), function(method){
//    $scope.$location[method] = function(){
//      var result = $location[method].call($location);
//      return angular.isObject(result) ? angular.toJson(result) : result;
//    };
//   });
// })