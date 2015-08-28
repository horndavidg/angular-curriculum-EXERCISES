app.controller('MainController', ['$scope', '$firebaseObject', function($scope, $firebaseObject){
    
	var coinRef = new Firebase("https://publicdata-cryptocurrency.firebaseio.com/")

    $scope.coinData = $firebaseObject(coinRef)




   
}]);