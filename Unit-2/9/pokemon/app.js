var app = angular.module('pokemonDirectiveApp', [])

app.controller('PokemonController', ['$scope', '$http', '$rootScope', '$q', function($scope, $http, $rootScope, $q) {

$scope.pokemonBag = [];
$rootScope.poke = {};


$http.get('http://pokeapi.co/api/v1/pokedex/1/').then(function(data){
     

for (var i = 0; i < 5; i++) {

var randnum = Math.floor(Math.random() * (data.data.pokemon.length - 1 + 1)) + 1;

var randPoke = data.data.pokemon[randnum];

// Get Extra Info

      $http.get('http://pokeapi.co/' + randPoke.resource_uri).then(function(data){
            

             var pokename = data.data.name;
             var types = data.data.types;
             var moves = data.data.moves;
             var sprites = data.data.sprites;


                  if (data.data.sprites.length > 0) {
                      
                     $http.get('http://pokeapi.co/' + data.data.sprites[0].resource_uri).then(function(data){
                     
                     image = 'http://pokeapi.co' + data.data.image;
                       
                       var poked = {}

                      poked.name = pokename;
                      poked.type = types;
                      poked.moves = moves;
                      poked.image = image;

                      $scope.pokemonBag.push(poked)
                      
                                         })
                           } else {
                      
                      var poked = {}

                      poked.name = pokename;
                      poked.type = types;
                      poked.moves = moves;
                      poked.image = "";
                       
                      $scope.pokemonBag.push(poked)

                   };

      }) // End of second HTTP GET Request
    
    } // End for Loop
    
 }); // End initial HTTP GET Request




}]);



///////////////////////////////////////////////////


app.directive('gsPokemonDetails', function() {
  return {
    templateUrl: 'pokemon-details.html',
    scope: {
      pokemons: '=pokemonData'
    }
  };
});