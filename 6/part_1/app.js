var app = angular.module("firstApp", []);

app.controller("EventsController", function($scope){
     
     $scope.number = 5; 
     $scope.pickRandomNumber = function(){
        $scope.number = Math.floor(Math.random() * 10) + 1;
    };
       
});



app.controller("ReverseController", function($scope){
     
     $scope.Reverse = function(s){
		     $scope.string = s.split('').reverse().join('');
		};
       
});