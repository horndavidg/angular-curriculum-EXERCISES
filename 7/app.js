var app = angular.module("firstApp", []);

app.controller("RedditController", function($scope){

$scope.newPost = {title: "", author: "", image: "", description: "", comments: [], votes: 0};
$scope.Posts = [];
$scope.postForm = false;
$scope.submitted = false;
$scope.sort = "votes";
$scope.reverse = true;

$scope.AddPost = function(newPost){
        
	if ($scope.post_form.$valid) {
      // Submit as normal
    
			$scope.Posts.push(newPost);
			$scope.newPost = {title: "", author: "", image: "", description: "", comments: [], votes: 0};
			$scope.postForm = false;
            $scope.post_form.submitted = false;

    } else {
      
      		$scope.post_form.submitted = true;
    
    }



        
         };

$scope.ShowPostForm = function(newPost){
        if ($scope.postForm === false){
            $scope.postForm = true;
    			} else {
             $scope.postForm = false;
            }
         };

$scope.Reverse = function(){
        if ($scope.sort === "title"){
            $scope.reverse = false;
                } else {
             $scope.reverse = true;
            }
         };




















});