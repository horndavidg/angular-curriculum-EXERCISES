var app = angular.module("firstApp", ['ngAnimate']);


//   app.filter('fromNow', function() {
//     return function(dateString) {
//       return moment(dateString).fromNow()
//     };
// });


// app.controller("RedditController", function($scope){

// $scope.newPost = {title: "", author: "", image: "", description: "", comments: [], votes: 0, date: "", comment_form: false};
// $scope.Posts = [];
// $scope.newComment = {author: "", text: ""};
// $scope.postForm = false;
// // $scope.commentForm = false;
// $scope.commentList = false;
// $scope.submitted = false;
// $scope.sort = "votes";
// $scope.reverse = true;

// $scope.AddPost = function(newPost){
        
// 	if ($scope.post_form.$valid) {
//       // Submit as normal
//             $scope.newPost.date = new Date();
// 			$scope.Posts.push(newPost);
// 			$scope.newPost = {title: "", author: "", image: "", description: "", comments: [], votes: 0};
// 			$scope.postForm = false;
//             $scope.post_form.submitted = false;

//     } else {
      
//       		$scope.post_form.submitted = true;
    
//     }
//  };


// $scope.ShowPostForm = function(){
//         if ($scope.postForm === false){
//             $scope.postForm = true;
//     			} else {
//              $scope.postForm = false;
//             }
//          };


// $scope.AddComment = function(newComment, post){
    
//     // console.log(newComment)
//     // console.log(post)
//             post.comments.push(newComment);
//             post.comment_form = false;
//             $scope.newComment = {author: "", text: ""};

//             // $scope.commentForm = false;
//             // $scope.comment_form.submitted = false;
//  };

// // $scope.AddComment = function(newComment){
        
// //     if ($scope.comment_form.$valid) {
// //       // Submit as normal
// //             $scope.post.comments.push(newComment);
// //             $scope.newComment = {author: "", text: ""};
// //             $scope.commentForm = false;
// //             $scope.comment_form.submitted = false;

// //     } else {
      
// //             $scope.comment_form.submitted = true;
    
// //     }
// //  };

// $scope.ShowCommentForm = function(post){
//         if (post.comment_form === false){
//             post.comment_form = true;
//                 } else {
//             post.comment_form = false;
//             }
//          };


// // $scope.ShowCommentForm = function(){
// //         if ($scope.commentForm === false){
// //             $scope.commentForm = true;
// //                 } else {
// //              $scope.commentForm = false;
// //             }
// //          };

// $scope.ShowCommentList = function(){
//         if ($scope.commentList === false){
//             $scope.commentList = true;
//                 } else {
//              $scope.commentList = false;
//             }
//          };

// $scope.Reverse = function(){
//         if ($scope.sort === "title"){
//             $scope.reverse = false;
//                 } else {
//              $scope.reverse = true;
//             }
//          };
// });




