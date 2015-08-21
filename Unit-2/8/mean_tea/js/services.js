app.factory('TeaList', ['$http', function($http) {
  var TeaList = {};
  TeaList.teas = [];


$http.get('../tea.json').then(function(data){
   
   		console.log(data.data);	
        TeaList.teas.push(data.data);
    
 },
		// Response if there is an error
		function(err)	{
			$scope.err = err;
 	});


  return TeaList;
}]);