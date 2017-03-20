//var type = ["Ancient Dragon", "Prowler", "Mighty Grunt"];
//var enemiesArray = [];
//
//function Enemy(type, hitPoints, defense) {
//    this.type = type;
//    this.hitPoints = hitPoints;
//    this.defense = defense;
//}
//
//function genType(type) {
//    if (Math.random() < .33) {
//        return ("Ancient Dragon");
//    } else if (Math.random() > .66) {
//        return ("Mighty Grunt");
//    } else {
//        return ("Prowler");
//    }
//}
//
//var genHitPoints = function(type){
//    if (genType === "Ancient Dragon") {
//        return hitPoints = Math.floor(Math.random() * (21)) + 80;
//    } else if (genType === "Prowler") {
//        return hitPoints = Math.floor(Math.random() * (30)) + 50;
//    } else {
//        return hitPoints = Math.floor(Math.random() * (30)) + 20;
//    }
//}
//
//var defense = function(){
//	var dFence = genHitPoints(genType).value * 3;
//}
//
//for (var i=0; i<100; i++){
//	genType();
//	genHitPoints();
//	defense();
//    var newEnemy = new Enemy(genType, genHitPoints, defense);
//    enemiesArray.push(newEnemy);
//}
//
//console.log(enemiesArray)


var enemies = ["Ancient Dragon", "Prowler", "Mighty Grunt"]

var oneHundredEnemies = [];

function Enemy(type, hitPoints, defense) {
	this.type = type;
	this.hitPoints = hitPoints;
	this.defense = defense;
}

function enemyGenerator() {
	for (var i = 0; i < 100; i++) {
		this.type = enemies[Math.floor(Math.random() * enemies.length)];
		if (type === [0]) {
			this.hitPoints = Math.floor(Math.random() * ((100 - 80) + 1) + 80);
		} else if (type === [1]) {
			this.hitPoints = Math.floor(Math.random() * ((79 - 50) + 1) + 50);
		} else {
			this.hitPoints = Math.floor(Math.random() * ((49 - 20) + 1) + 20);
		}
		this.defense = hitPoints * 3;

		oneHundredEnemies.push(new Enemy(type, hitPoints, defense));
	}
	console.log(oneHundredEnemies);
}
enemyGenerator();