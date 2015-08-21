app.controller("MainController", ["$scope", "TeaList", function($scope, TeaList){


$scope.teaData = TeaList.teas;



}]);


// ---------------------------------------


app.controller("CartController", ['$scope', '$route', '$routeParams', '$location', function($scope, $route, $routeParams, $location){


}]);