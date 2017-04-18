angular.module("temperatureApp")

.service('TempService', ['$http', function($http){
	
	this.getTemp = function(lat, long){
		return $http.jsonp('https://api.darksky.net/forecast/cbf065cc6dc6805225644c5a7577eac8/40.765823,-111.888352 callback=JSON_CALLBACK')
		.then(function (response) {
			var currentTemp = response.data.currently.temperature;
		})
	}
}])