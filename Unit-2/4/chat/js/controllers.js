app.controller("MainController", function($scope, $http){

// Bad URL with error handling 
// $http.get('https://itunes.apple.com/searchmdemdekmk').then(function(data){
//      $scope.itunesData = data;
//  },
// 		// Response if there is an error
// 		function(response)	{
// 			$scope.response = response;
//  	});
               
$scope.new = {name:"", content:""};

 
// Gets the initial data set from the API ------------

 $http.get('https://shielded-peak-6345.herokuapp.com/').then(function(data){
     $scope.messages = data.data;

 },
		// Response if there is an error
		function(err)	{
			$scope.err = err;
 	});              

// Adds a new comment the re-gets the data -------------

$scope.AddComment = function(){
  
  $http.post('https://shielded-peak-6345.herokuapp.com/messages', $scope.new).then(function(data){
     $scope.data = data;
     $scope.new = {name:"", content:""};


			 $http.get('https://shielded-peak-6345.herokuapp.com/').then(function(data){
			     $scope.messages = data.data;
			    },
					// Response if there is an error
					function(err)	{
						$scope.err = err;
			 	}); 

 },
		// Response if there is an error
		function(err)	{
		 $scope.err = err;
 	}); 
 };







});