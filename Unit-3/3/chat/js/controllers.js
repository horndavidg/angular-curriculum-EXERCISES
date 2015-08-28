app.controller('MainController', ['$scope', '$firebaseArray', function($scope, $firebaseArray){
    
	var chatsRef = new Firebase("https://angularfirefun.firebaseio.com/chat");

    $scope.chats = $firebaseArray(chatsRef);
    $scope.newChat = {username:"", image:"", message:"", edit: false}

// $scope.chats.$add({username:"Fred", image: "http://i.dailymail.co.uk/i/pix/2010/02/05/article-0-08288061000005DC-736_468x383.jpg", message:"Hi guys!", edit: false})

$scope.addChat = function(){
	
	$scope.chats.$add($scope.newChat).then(function(data) {
			
			$scope.newChat.message = "";
	})
   }

$scope.Remove = function(chat){
	$scope.chats.$remove(chat).then(function(data) {

		console.log("Chat Removed!");

	})
   }


$scope.Edit = function(chat){	

			chat.edit = true;
   }


$scope.Update = function(chat){
	
	chat.edit = false;
	$scope.chats.$save(chat).then(function(data) {
						
	})
   }


}]);