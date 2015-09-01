app.controller("SkimitController", ['$scope', '$firebaseArray', '$firebaseObject', function($scope, $firebaseArray, $firebaseObject) {


var posts = new Firebase("https://skimit.firebaseio.com/posts")
$scope.Posts = $firebaseArray(posts)
var ref = new Firebase("https://skimit.firebaseio.com/comments")
// var Comments = $firebaseArray(ref)
// $scope.Posts.$add(Comments)
$scope.Comments = $firebaseArray(ref)

$scope.newPost = {title: "", author: "", image: "", description: "", votes: 0, date: "", comment_form: false, comment_list: false};
// $scope.Comments = $firebaseArray(comments)
// $scope.Posts = [];
$scope.newComment = {author: "", text: "", index: null};
$scope.postForm = false;
$scope.submitted = false;
$scope.sort = "votes";
$scope.reverse = true;
// $scope.commentArray = [];

$scope.AddPost = function(newPost){
      
// Can use '$scope.newPost' instead of passing the variable
// through the function. The controller already knows about it 
// because it exists on the current scope. 

	if ($scope.post_form.$valid) {
      $scope.newPost.date = new Date();
			$scope.Posts.$add($scope.newPost);
			$scope.newPost = {title: "", author: "", image: "", description: "", comments: "", votes: 0};
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


$scope.AddComment = function(newComment, post, $index){
    
            console.log($scope.Posts);
            $scope.newComment.index = $index
            $scope.Comments.$add($scope.newComment)
            post.comment_form = false;
            $scope.newComment = {author: "", text: "", index: null};

 };

// $scope.GetComments = function($index){
//          // console.log($index);
//          // console.log($scope.Comments);
//          var result = [];
//          $scope.Comments.forEach(function(comment){


//             if (comment.index === $index) {
//                     result.push(comment)
//                     //     console.log("HEYHEY");
//                     // $scope.commentArray.push(comment)

//             }
//           })
//          // console.log($scope.commentArray);
//          return result;
//        };


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
}]);