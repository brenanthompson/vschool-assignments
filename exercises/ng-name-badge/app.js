var app = angular.module('ngmeBadge', []);

app.controller('mainCtrl', ['$scope', function($scope){
$scope.people = [];
	
	$scope.submit=function(info){
//		person.info = $scope.info;
		$scope.people.push(info);
		$scope.person={};
	}

}]);
