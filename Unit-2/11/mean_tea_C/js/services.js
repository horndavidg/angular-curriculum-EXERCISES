app.factory('TeaList', ['$http', '$rootScope', function($http, $rootScope) {
  var TeaList = {};
  TeaList.teas = [];
  TeaList.bagTotal = [];
  TeaList.cart = [];
  TeaList.cartTotal = [];


$http.get('../tea.json').then(function(data){
   
   		// Converts the price into one with cents (decimal point in the right place)
   		for (var i = 0; i < data.data.length; i++) {	
   			 
   			var x = data.data[i].price.toString();  		 
            x = x.substring(0, (x.length-2)) + "." + x.substring((x.length-2), x.length);
            data.data[i].price= x;

       data.data[i].quantity = 0;  
       data.data[i].edit = false; 

   		}

        TeaList.teas.push(data.data);
    
 },

		// Response if there is an error
		function(err)	{
			$scope.err = err;
 	}),

// End of data GET request ///////////////////////

TeaList.findTotal = function(index) {

var total = 0;
 
// Sets the default to 1
 if (TeaList.teas[0][index].quantity === 0) {
  TeaList.teas[0][index].quantity = 1;
 }



for (var i = 0; i < TeaList.teas[0].length; i++) {  
   
      var num = parseInt(TeaList.teas[0][i].quantity)
      
      total += num;
      
      }
      
       TeaList.bagTotal.splice(0, 1, total);
     
  };

////////////////////////////////////////////////  

TeaList.findTotalRemove = function() {

var total = 0;

for (var i = 0; i < TeaList.teas[0].length; i++) {    
      var num = parseInt(TeaList.teas[0][i].quantity)      
      total += num;      
      }      
       TeaList.bagTotal.splice(0, 1, total);   
  };

////////////////////////////////////////////////

TeaList.makeCart = function() {

TeaList.cart = [];
TeaList.cartTotal = [];

var cost = 0;

for (var i = 0; i < TeaList.teas[0].length; i++) { 

if (TeaList.teas[0][i].quantity > 0) {

TeaList.teas[0][i].quantity = parseInt(TeaList.teas[0][i].quantity)
TeaList.cart.push(TeaList.teas[0][i])

var markup = TeaList.teas[0][i].quantity * TeaList.teas[0][i].price;
cost += markup;

      }
    }

TeaList.cartTotal.splice(0, 1, cost);

 };

//////////////////////////////////////////////////

  TeaList.Remove = function(index) {

     for (var i = 0; i < TeaList.teas[0].length; i++) {

        if (TeaList.teas[0][i].name === TeaList.cart[index].name)
     
                  TeaList.teas[0][i].quantity = 0;
        }
    
    TeaList.cart.splice(index, 1);
    
  };


//////////////////////////////////////////////////


  return TeaList;
}]);