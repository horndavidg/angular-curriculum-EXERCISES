app.controller("RedditController", function($scope){

$scope.newPost = {title: "", author: "", image: "", description: "", comments: [], votes: 0, date: "", comment_form: false, comment_list: false};
$scope.Posts = [];
$scope.newComment = {author: "", text: ""};
$scope.postForm = false;
$scope.submitted = false;
$scope.sort = "votes";
$scope.reverse = true;

$scope.AddPost = function(newPost){
        
	if ($scope.post_form.$valid) {
      $scope.newPost.date = new Date();
			$scope.Posts.push(newPost);
			$scope.newPost = {title: "", author: "", image: "", description: "", comments: [], votes: 0};
			$scope.postForm = false;
            $scope.post_form.submitted = false;

    } else {
      
      		$scope.post_form.submitted = true;
    
    }
 };


$scope.ShowPostForm = function(){
        if ($scope.postForm === false){
            $scope.postForm = true;
    			} else {
             $scope.postForm = false;
            }
         };


$scope.AddComment = function(newComment, post){
    
  
            post.comments.push(newComment);
            post.comment_form = false;
            $scope.newComment = {author: "", text: ""};

 };

$scope.ShowCommentForm = function(post){
        if (post.comment_form === false){
            post.comment_form = true;
                } else {
            post.comment_form = false;
            }
         };

$scope.ShowCommentList = function(post){
         if (post.comment_list === false){
             post.comment_list = true;
                } else {
             post.comment_list = false;
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