app.controller('MainController', ['$scope', '$firebaseArray', function($scope, $firebaseArray){
    
	var todosRef = new Firebase("https://angularfirefun.firebaseio.com/list");

    $scope.todos = $firebaseArray(todosRef);
    $scope.newTodo = {text:"", completed: false}

// $scope.todos.$add({text:"Howdy", completed: false})

$scope.addTodo = function(){
	$scope.todos.$add($scope.newTodo).then(function(data) {

			$scope.newTodo.text = "";
	})
   }


$scope.Remove = function(todo){
	$scope.todos.$remove(todo).then(function(data) {

			// $scope.newTodo.text = "";
	})
   }


$scope.toggle = function(todo){

	if (todo.completed) {
      
	todo.completed = false;
    $scope.todos.$save(todo);

	} else {
	
	todo.completed = true;
    $scope.todos.$save(todo);

	}
}






}]);