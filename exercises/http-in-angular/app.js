var app = angular.module('httpApp', []);

app.controller('mainCtrl', ['$scope', '$http', function($scope, $http){
	
	$http.get('http://pokeapi.co/api/v1/pokemon/1')
		.then(function(response){
		console.log(response.data);
	});
	
	var toDos = {
		title: 'Shave eyebrows',
		description: 'With kitchen knife',
		completed: false,
	}
	
	$http.post("http://api.vschool.io/brenanthompson/todo/", toDos)
		.then(function(response){
		console.log(response.data)
	});
	
}]);