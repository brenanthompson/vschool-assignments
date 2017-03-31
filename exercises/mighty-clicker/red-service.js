angular.module('mightyClicker')

.service('RedService', function(){
	
	this.redScore = 100;
	
	this.redIncrement = function(){
		
		this.redScore++;
		return this.redScore
		
	}
	
	this.redDecrement = function(){
		
		this.redScore --;
		return this.redScore
		
	}
	
	this.redReset = function(){
		
		if (this.redScore === 0){
			this.redScore = 100
		}
		return this.redScore
	}
	
});