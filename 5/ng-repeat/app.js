var app = angular.module("firstApp", []);

app.controller("SymbolController", function($scope){
       $scope.names = ["Harry", "Ron", "Hermione", "Sirius", "Hedwig", "Tonks"];
       $scope.symbols = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
       
});


app.controller("NumberController", function($scope){
       $scope.numbers = [1,1,2,5,6,9,9,9];
       $scope.colorlist = {1:'red', 2:'orange',3:'yellow',4:'green',5:'blue',6:'indigo',7:'yellow'};
});

app.controller("PetController", function($scope){
       $scope.petlist = {1:'Teddy', 2:'Paul',3:'Frank',4:'Sammy',5:'Peter',6:'Buddy',7:'Gracie'};
});