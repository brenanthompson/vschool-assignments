//randomMath = function (0, 2) {
//   return Math.floor(Math.random() * (max - min) + min);
//};

var player = {
	name: "Mario",
	totalCoins: 0,
	status: "Small",
	star: false,
	setName: function (namePicked) {
		this.name = namePicked;
	},
	gotHit: function () {
		//		if(gotHit){
		//			this.status = status[i+1]
		//		}
		if (this.status === "Powered Up") {
			this.status = "Big";
		} else if (this.status === "Big") {
			this.status = "Small";
		} else if (this.status === "Small") {
			this.status = "Dead";
		}
	},
	gotPowerup: function () {
		if (this.status === "Small") {
			this.status = "Big";
		} else if (this.status === "Big") {
			this.status = "Powered Up";
		}
	},
	gameActive: function () {
		if (status === "Dead") {
			return false
		} else {
			return true
		}
	},
	addCoin: function (coins) {
		this.totalCoins = totalCoins++;
	},
	printPlayer: function () {
		var starMessage = "You Don't Have A Star!";
		if (this.star) starMessage = "You Have a Star!";
		console.log("Name: " + player.name + ", " + "Status: " + this.status + ", " + "Total Coins: " + this.totalCoins + ", " + "Star: " + this.star + ",")
	}
}

function randomMath(min, max) {
	Math.floor(Math.random() * (max - min) + min);
}

function action() {
	var rando = randomMath(0, 3);
	if (rando === 0) {
		player.gotHit();
	} else if (rando === 1) {
		player.gotPowerup();
	} else if (rando === 2) {
		player.addCoin();
	}
}

////print = function(namePicked){
//		console.log("Name: " + name + ", " + "Status: " + status + ", " + "Total Coins: " + totalCoins.value + ", " + "Star: " + star + ",")
//	}

//player.printPlayer();

for (var i = 0; i < 3; i++) {
	action();
	player.printPlayer();
}
