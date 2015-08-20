app.controller("ContactsController", ["$scope", "ContactList", "Giphyservice", function($scope, ContactList, Giphyservice){

   $scope.newContact = {name: "", email: "", phone: ""};
   $scope.contactData = ContactList.contactList;

   $scope.found = ContactList.foundContact;

   $scope.AddContact = ContactList.addContact;
   $scope.FindContact = ContactList.findContact;
   $scope.FindContacti = ContactList.findContacti;
   $scope.RemoveContact = ContactList.removeContact;
   $scope.findGiph = Giphyservice.search;

}]);

app.controller("ShowController", ['$scope', 'ContactList', '$route', '$routeParams', '$location', 'Giphyservice', function($scope, ContactList, $route, $routeParams, $location, Giphyservice){

   $scope.id = $routeParams.id;
   $scope.foundi = ContactList.foundContacti;
   $scope.foundGiph = Giphyservice.foundGiph;

}]);