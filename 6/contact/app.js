var app = angular.module("firstApp", []);

app.controller("ContactsController", function($scope){

$scope.newContact = {name: "", email: "", phone: ""};
$scope.Contacts = [];

$scope.AddContact = function(newContact){
        $scope.Contacts.push(newContact);
        $scope.newContact = {name: "", email: "", phone: ""};
         };


});