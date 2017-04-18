var app = angular.module('rockTheVote', []);

app.controller("mainCtrl", , function ($scope, ) {
	
	$scope.issues = {};
	
	httpService.getIssues().then(function (response) {
		$scope.bounties = response;
	})
})

app.service