var app = angular.module("ngToDo")

.service('HttpService', function($http) {
	
	this.getList = function(input){
//		var toDo = {};
		return $http.get('https://api.vschool.io/brenanthompson/todo/')
			.then(function(response){
			
			return response.data
//			this.toDo = (response.data);
//			console.log(working);
		})
	};
	
	this.submit = function (input) {
		console.log(input)
		return $http.post('https://api.vschool.io/brenanthompson/todo/',input).then(function(response){
			return response.data
		})
			
	};
	
	this.deleteMe = function(id){
		return $http.delete('https://api.vschool.io/brenanthompson/todo/' + id)
		.then(function(response){
			return "You've deleted " + id
		})
		
	};
	
	this.save = function(item){
		
		return $http.put('https://api.vschool.io/brenanthompson/todo/' + item._id, item);
		
	}
	
})