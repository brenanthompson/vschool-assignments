var app = angular.module('angularModel', []);

app.controller('mainCtrl', ['$scope', function($scope){
	
	var req = {
		method: "GET",
		url: "http://pokeapi.co/api/v1/pokedex/"
	}
	
	$http(req).then(function(response){
		
	$http.get("http://pokeapi.co/api/v1/pokedex/"){
		then(function(response))
		
		$scope = response.data.objects[0].pokemon;
	});
	
}]);