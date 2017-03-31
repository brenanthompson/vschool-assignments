var app = angular.module('learningAngular', []);

app.controller('mainController', function($scope, dataService){
	
	$scope.person = {
		firstName: 'John',
		lastName: 'Johnson'
	};
	
	$scope.getName = function(){
		return $scope.person.firstName + ' ' + $scope.person.lastName;
	}
	
	$scope.title = "TEST"
	
	dataService.personLoggedIn=$scope.person;
	
});




//	$scope.todos = [
//    {
//        name: "Bread",
//        price: "$2.00"
//    },
//    {
//        name: "Milk",
//        price: "$2.99"
//    },
//    {
//        name: "Protein",
//        price: "$14.50"
//    }
//]