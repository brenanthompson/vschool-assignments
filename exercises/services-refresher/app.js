var app = angular.module("myApp", []);

app.controller("mainCtrl", function($scope, ToonService){

	$scope.cartoons = ToonService.cartoons;
	
	$scope.addCartoon = function(cartoon){
		
		$scope.cartoons = ToonService.addCartoon(cartoon)
		$scope.cartoon = {};
		
	}
	

});