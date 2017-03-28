var app = angular.module('myApp', ['ngRoute']);

app.config(["$routeProvider", function($routeProvider){
	
	$routeProvider
	
	.when("/home", {
		controller: "HomeController",
		templateUrl: "home/home.html"
	})
	.otherwise({
		redirectTo: "/home"
	});
}]);