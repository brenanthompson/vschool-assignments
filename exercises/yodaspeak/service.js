var app = angular.module('yoda')

.service('HttpService', function($http){
	
	
		
		req = {
		method: "GET",
		headers: {
			'X-Mashape-Key': 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'
		}
	}
		
		this.getYodaSpeak = function(input){
		
		req.url = "https://yoda.p.mashape.com/yoda?sentence=" + input;
		
		return $http(req).then(function(response){
			
			var yodaSentence = response.data;	
			return yodaSentence;
			
		}, function(error){
			console.log(error)
		})
	}
	
})