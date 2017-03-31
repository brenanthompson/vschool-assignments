var app = angular.module("favState", ["ngRoute"])

.config(["$routeProvider", function ($routeProvider){
	
	$routeProvider
	
	.when('/home',{
		templateUrl: "home/home.html",
		
		controller: "HomeController"
	})
	
	.when("/about", {
		templateUrl:"about/about.html",
		
		controller: "AboutController"
	})
	
	.when("/why-i-love", {
		templateUrl:"why-i-love/why-i-love.html",
		
		controller: "LoveController"
	})
	
	.otherwise({
		redirectTo: "/home"
	})
}])