var app = angular.module("ngToDo", []);

app.controller('groundCtrl', ['$scope', '$http', function($scope, $http){
	
	$http.get('http://api.vschool.io/brenanthompson/todo/')
		.then(function(response){
		console.log(response.data);
	});
	
}])