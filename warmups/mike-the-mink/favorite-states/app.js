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

.directive("mikeTheMink", function(){
	
	return{
		template: "<img ng-hide='hide' ng-mouseover='hide = true' src= https://emynow.files.wordpress.com/2014/11/happy-mink-e1435918910306.jpg?w=455&h=298>"
	}
	
})