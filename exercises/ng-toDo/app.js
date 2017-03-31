var app = angular.module("ngToDo", []);

app.controller('groundCtrl', ['$scope', 'HttpService', function ($scope, HttpService) {

	
	
	HttpService.getList().then(function(data){
		$scope.toDo = data
	
		
	})
	
	$scope.toDo = [];
	
	$scope.submit = function(input){
	
	HttpService.submit(input).then(function(something){
		console.log(something);
		$scope.toDo.push(something)
	
			});
	}


	$scope.deleteMe = function(index){
		var id = $scope.toDo[index]._id;
		
		HttpService.deleteMe(id).then(function(data){
			$scope.toDo.splice(index, 1)
		})
	}
	
	$scope.save = function(item){
		HttpService.save(item).then(function(data){
//			toDo[i] = data
		})
	}

	}])
//	$http.get('http://api.vschool.io/brenanthompson/todo/')
//			.then(function(response){
//			$scope.toDo = response.data;
//		})
//	
//	$scope.submit = function (input) {
//
//		$http.post('http://api.vschool.io/brenanthompson/todo/', input)
//			.then(function (response) {
//				$scope.toDo.push(response.data);
//				console.log(toDo);
//			});
//	};
//	
//	
//	$scope.deleteMe = function(index, id){
//		$http.delete('http://api.vschool.io/brenanthompson/todo/' + id);
//			$scope.toDo.splice(index, 1);
//		
//	}
//	
//
//	$scope.save = function(item){
//		
//		$http.put('http://api.vschool.io/brenanthompson/todo/' + item._id, item);
//		
//	}


