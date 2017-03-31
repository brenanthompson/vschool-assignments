var app = angular.module("hitList", []);

app.controller('mainCtrl', ['$scope', "HttpService", function($scope, HttpService){
	
		HttpService.getKills().then(function(data){
			$scope.toWhack = data
		});
	
}]);

//app.controller('mainCtrl', ['$scope', '$http', function($scope, $http){
//	
//	$http.get('http://api.vschool.io:6543/hitlist.json')
//		.then(function(response){
//		$scope.toWhack = response.data;
//		console.log(response.data);
//	});
//	
//	
//}]);
//	
