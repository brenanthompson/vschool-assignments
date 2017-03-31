var app = angular.module('mightyClicker');

app.service('BlueService', function(){
	
	this.blueScore = 100;
	
	this.blueIncrement = function(){
		
		this.blueScore++;
		return this.blueScore
		
	}
	
	this.blueDecrement = function(){
		
		this.blueScore --;
		return this.blueScore
		
	}
	
	this.blueReset = function(){
		
		if (this.blueScore === 0){
			this.blueScore = 100
		}
		return this.blueScore
		
	}
	
});