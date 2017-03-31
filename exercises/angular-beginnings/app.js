//var app = angular.module('angularApp', []);
//
//app.controller('mainController',['$scope', function($scope){
//	
//}]);

var app =  angular.module('angularApp', []);

app.controller('mainCtrl', ['$scope', function($scope){
	
	$scope.output = function(){
		return $scope.newTxt;
	}
	
}]);