var penguinsVsCommies = [];

function Party(name, population) {
	this.name = name;
	this.population = population;
}

var penguins = new Party("Penguins", 1000000);
var commies = new Party("Communists", 1000000);

var array = penguinsVsCommies.push(penguins, commies);

console.log(penguinsVsCommies);

function randoMath(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
};


function coin() {
	if (coin === 1) {
		var party = penguinsVsCommies[0];
	} else {
		var party = penguinsVsCommies[1];
	}
	return party;
}

var party = coin(); 
console.log (penguinsVsCommies);	
//function attacking(coin, party, penguinsVsCommies){
//	if(penguins.population === 1000000 && commies.population === 1000000){
//		return coin();
//	} else if (this.party === party){
//		return party = penguinsVsCommies.reverse();
//	}
//
//}
//
//console.log(attacking());


//var damage = randoMath(1, 100000);
//console.log(damage);


function onHit(party) {
	if (party.population > 0) {
		var damage = randoMath(1, 100000);
		party.population = party.population - damage;
		console.log("The " + party.name + " got nuked! " + damage + " " + party.name + " were wiped out. Only " + party.population + " are left.");
		return;
	} else {
		console.log("Direct hit! The " + party.name + " have been completely eliminated!");
//		counter();
		return;
	}
	counter();
		console.log(party);
}

function onMiss(party) {
	console.log("The nuke missed! The " + party.name + " rejoice!");
	counter();
	return;
}

function counter(party, penguins, commies){
	if(party.name === "Penguins"){
	party = commies;
	return;
	} else {
		party = penguins;
		return;
	}
	console.log(penguinsVsCommies);
}

function attack() {
	while (party.population > 0) {
		sendNuke(party, onHit, onMiss, counter);
	}
}

function sendNuke(party, onHit, onMiss, counter) {
	var hitMiss = randoMath(1, 2);

	if (hitMiss === 1){
		onHit(party);
	} else {
		onMiss(party);
	}
}


attack();

function victory() {
	if (penguins.population <= 0) {
		console.log("The filthy capitalist Penguins have been defeated! Let us drink with our comrades and swiftly get back to work!");
	} else {
		console.log("The damn Commies got what was coming to 'em. Penguins Forever!! Now let's eat some fish.")
	}
};

victory();