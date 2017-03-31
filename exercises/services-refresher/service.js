var app = angular.module("myApp");

app.service("ToonService", function(){
	
	
	this.cartoons = [];
	
	var self = this;
	
	this.addCartoon = function(input){
		self.cartoons.push(input)
		return this.cartoons;
	};
	
})