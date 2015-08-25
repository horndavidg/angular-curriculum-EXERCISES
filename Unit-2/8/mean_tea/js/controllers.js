app.controller("MainController", ["$scope", "TeaList", "$rootScope", function($scope, TeaList, $rootScope){


$scope.teaData = TeaList.teas;
$rootScope.bagTotal = TeaList.bagTotal;
$scope.FindTotal = TeaList.findTotal;
$scope.MakeCart = TeaList.makeCart;
$rootScope.teaCartTotal = TeaList.cartTotal;

$scope.setCats = function(){

  if (!$rootScope.paramOne) {
      
      $rootScope.paramOne = {"categories":this.searchCat};
  
      } else if (!$rootScope.paramTwo){

       $rootScope.paramTwo = {"categories":this.searchCat};

      } else {

      $rootScope.paramThree = {"categories":this.searchCat};

            }
         };

// Resets the Category Search Parameters ////////////

$rootScope.resetCats = function(){

delete $rootScope.paramOne; 
delete $rootScope.paramTwo;
delete $rootScope.paramThree;
this.sort = "";
this.searchCat = "";

}


}]);

// ---------------------------------------------


app.controller("CartController", ['$scope', '$route', '$routeParams', '$location', 'TeaList', '$rootScope', function($scope, $route, $routeParams, $location, TeaList, $rootScope){

$scope.teaCart = TeaList.cart;
$scope.teaCartTotal = TeaList.cartTotal;
$scope.Remove = TeaList.Remove;
$scope.FindTotal = TeaList.findTotal;
$scope.FindTotalR = TeaList.findTotalRemove;
$scope.MakeCart = TeaList.makeCart;
$rootScope.bagTotal = TeaList.bagTotal;

$scope.getTotal = function(){
	
    var cost = 0;
    for (var i = 0; i < TeaList.cart.length; i++) {
    var markup = TeaList.cart[i].quantity * TeaList.cart[i].price;
    cost += markup;

                 }

              $scope.teaCartTotal = [cost];

         };


}]);

// ----------------------------------------------

// app.controller("LocationController", ['$scope', '$location', function($scope, $location) {
//   $scope.$location = {};
//   angular.forEach("protocol host port path search hash".split(" "), function(method){
//    $scope.$location[method] = function(){
//      var result = $location[method].call($location);
//      return angular.isObject(result) ? angular.toJson(result) : result;
//    };
//   });
// }]);


