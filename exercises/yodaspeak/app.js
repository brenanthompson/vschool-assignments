var app = angular.module('yoda', []);

app.controller("mainCtrl", ["$scope", "HttpService", function ($scope, HttpService) {


	$scope.getYodaSpeak = function (input) {
		
		

		HttpService.getYodaSpeak(input).then(function (data) {
			$scope.yodaSentence = data
		})

	}

	//	$scope.getYodaSpeak = function(){
	//		
	//		req.url = "https://yoda.p.mashape.com/yoda?sentence=" + $scope.sentence;
	//		
	//		$http(req).then(
	//		function(response){
	//			$scope.yodaSentence = response.data;			
	//		}, function(error){
	//			console.log(error)
	//		})
	//	}


}]);
