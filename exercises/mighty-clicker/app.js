var app = angular.module("mightyClicker", []);

app.controller('groundCtrl', ['$scope', 'RedService', 'BlueService', function($scope, RedService, BlueService) {
	
	$scope.blueClick = function(){
		
		$scope.blueScore = BlueService.blueIncrement();
		$scope.redScore = RedService.redDecrement();
		$scope.redScore = RedService.redReset();
		
	}
	
	$scope.redClick = function(){
		
		$scope.redScore = RedService.redIncrement();
		$scope.blueScore = BlueService.blueDecrement();
		$scope.blueScore = BlueService.blueReset();
		
	}
	
}])