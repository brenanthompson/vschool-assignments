var readlineSync = require("readline-sync");
var walk = true;
var randoMath = function (min, max) {
	return Math.floor(Math.random() * (max - min) + min);
};
var shiaType = ["Shia LaBeouf", "Hollywood Superstar Shia LaBeouf", "Actual Cannibal Shia LaBeouf"];
var shia1 = {
	type: "Shia LaBeouf",
	hitPoints: 50,
	attack: randoMath(5, 20)
};
var shia2 = {
	type: "Hollywood Superstar Shia LaBeouf",
	hitPoints: 75,
	attack: randoMath(15, 40),
	drops: 
};

var shia3 = {
	type: "Actual Cannibal Shia LaBeouf",
	hitPoints: 150,
	attack: randoMath(30, 70),
	drops: "Shia's Severed Head"
};

function user(userName, hitPoints, inventory) {
	this.userName = userName;
	this.hitPoints = hitPoints;
	this.inventory = inventory;
}

function whichShia() {
	for (var i = 0; i < 2; i++) {
		this.type = [randoMath(3,1)];
	}
	return(this.type)
}

var fightShia = function () {
	
}
	

var userName = readlineSync.question("Hey, what's your name?");

console.log(userName + " huh? Okay, whatever. Now listen up.");

console.log("You're walking in the woods...");

function walkOrFight() {
	while (walk === true) {
		if (Math.random() < .75) {
			var walking = readlineSync.keyIn("Press 'w' to walk", {
				limit: "w"
			});
		} else {
			fightShia();
		}
	}
};


//