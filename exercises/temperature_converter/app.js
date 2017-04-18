var app = angular.module('temperatureApp', []);



app.controller('mainCtrl', ['$scope', 'TempService', function($scope, TempService){
							
	$scope.temps = [10, 15, 20, 25, 30]						
	
}])

app.filter('tempFilter', function(){
	
//	return function(temps){
//		for(i=0; i<temps.length; i++){
//			if()
//		}
//	}
	
})