var app = angular.module("firstApp", []);

app.controller("PingPongController", function($scope){
   
$scope.pscore = {score: 0, winner: false, loser: false, games: 0};
$scope.ppscore = {score: 0, winner: false, loser: false, games: 0};
$scope.serve = 0;
$scope.notice = "";
$scope.AddPointP = function(){
        $scope.pscore.score = $scope.pscore.score + 1;
        $scope.serve = $scope.serve + 1;
        if ($scope.pscore.score == 11) {
        	$scope.pscore.games = $scope.pscore.games + 1;
        	$scope.pscore.winner = true;
        	$scope.ppscore.loser = true;
        	// $scope.pscore.score = 0;
        	// $scope.ppscore.score = 0;


        }
    };
$scope.AddPointPP = function(){
        $scope.ppscore.score = $scope.ppscore.score + 1;
        $scope.serve = $scope.serve + 1;
            if ($scope.ppscore.score == 11) {
        	$scope.ppscore.games = $scope.ppscore.games + 1;
        	$scope.ppscore.winner = true;
        	$scope.pscore.loser = true;
        	// $scope.ppscore.score = 0;
        	// $scope.pscore.score = 0;
        }
    };
$scope.Reset = function(){
        $scope.ppscore.score = 0;
        $scope.pscore.score = 0;
			$scope.ppscore.winner = false;
        	$scope.ppscore.loser = false;
        	$scope.pscore.winner = false;
        	$scope.pscore.loser = false;
        $scope.serve = 0;
        
    };

$scope.Notice = function(){
if ($scope.notice === "Let's Play!"){
        $scope.notice = "";
    } else {
      $scope.notice = "Let's Play!";
        }



    };

});
