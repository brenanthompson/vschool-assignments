angular.module("myApp")

.controller('HomeController', ["$scope", "pokeService", function ($scope, pokeService){
	
	$scope.addPokemon = function(pokeName){
		
		$scope.pokemon = pokeService.addPokemon(pokeName)
		
	}
	
	$scope.removePokemon = function(pokeName){
		pokeService.removePokemon(pokeName)
	}
}])