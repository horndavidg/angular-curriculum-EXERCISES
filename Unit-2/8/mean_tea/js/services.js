app.factory('TeaList', ['$http', function($http) {
  var TeaList = {};
  TeaList.teas = [];
  TeaList.bagTotal = [];


$http.get('../tea.json').then(function(data){
   
   		// Converts the price into one with cents (decimal point in the right place)
   		for (var i = 0; i < data.data.length; i++) {	
   			 
   			var x = data.data[i].price.toString();  		 
            x = x.substring(0, (x.length-2)) + "." + x.substring((x.length-2), x.length);
            data.data[i].price= x;

       data.data[i].quantity = 0;  

   		}

        TeaList.teas.push(data.data);
    
 },

		// Response if there is an error
		function(err)	{
			$scope.err = err;
 	}),

// End of data GET request ///////////////////////

TeaList.findTotal = function() {

var total = 0;
for (var i = 0; i < TeaList.teas[0].length; i++) {  
   
      var num = parseInt(TeaList.teas[0][i].quantity)
      
      total += num;
      
      }
      
       TeaList.bagTotal.splice(0, 1, total);
     
  };





  return TeaList;
}]);