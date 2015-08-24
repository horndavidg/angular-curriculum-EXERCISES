app.controller("MainController", ["$scope", "TeaList", "$rootScope", function($scope, TeaList, $rootScope){


$scope.teaData = TeaList.teas;
$rootScope.bagTotal = TeaList.bagTotal;
$scope.FindTotal = TeaList.findTotal;

console.log()







// $scope.Reverse = function(){
// 	console.log("this ran");
//         if ($scope.sort === "price"){
//             $rootScope.reverse = false;
//                 } else {
//              $rootScope.reverse = true;
//              $scope.sort = "price";
//             }

//             console.log($rootScope.reverse);
//          };

}]);

// ---------------------------------------


app.controller("CartController", ['$scope', '$route', '$routeParams', '$location', function($scope, $route, $routeParams, $location){


}]);