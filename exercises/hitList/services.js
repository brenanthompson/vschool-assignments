var app = angular.module("hitList")

.service("HttpService", function($http) {
	
	this.getKills = function(){
		return $http.get('http://api.vschool.io:6543/hitlist.json')
		.then(function(response){
		this.toWhack = response.data;
		console.log(response.data)
		return response.data;
		
	})
	}
	
});