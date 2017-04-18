var readlineSync = require("readline-sync");
var colors = require('colors');
var walk = true;
var randoMath = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};
var shia = {};

var shiaType = [
    {
        type:"Shia LaBeouf",
        hitPoints: 50,
        attack: randoMath(5, 20),
        drops: "Knife"
    },
    {
        type: "Hollywood Superstar Shia LaBeouf",
        hitPoints: 75,
        attack: randoMath(15, 40),
        drops:"Stump Leg"
    },
    {
        type: "Actual Cannibal Shia LaBeouf",
        hitPoints: 150,
        attack: randoMath(30, 70),
        drops: "Shia's Severed Head"
    }];

function User(userName, hitPoints, inventory) {
    this.userName = userName;
    this.hitPoints = hitPoints;
    this.inventory = inventory;
};

var userName = readlineSync.question("Hey, what's your name?");

console.log(userName + " huh? Okay, whatever. Now listen up.");

var storyOne = function() {
    console.log("You're walking in the woods...")
    console.log("There's no one around and your phone is dead.")
    console.log("Out of the corner of your eye, you spot him...")
    console.log("shia labeouf".red)
    var next = readlineSync.keyIn("Press '.' to continue", {
        limit: "."
    })
    console.log("He's following you about thirty feet back.")
    console.log("He gets down on all fours and breaks into a sprint.")
    console.log("He's gaining on you!")
    console.log("Shia LaBeouf".underline.red)
    console.log("Run!".bgRed)
    var run = readlineSync.keyIn("Press 'r'", {
        limit: "r"
    })
    console.log("You're looking for your car but you're all turned around")
    console.log("He's almost upon you now, and you can see there's" + " blood ".red + "on his face")
    console.log("My God, there's blood everywhere!".bold.red)

};
storyOne();

var whichShia = function(randoMath, shiaType) {
    for (var i = 0; i < 2; i++) {
        shia = shiaType[randoMath(3, 1)];
    }
    console.log(shia)
};


function fightShia () {
    whichShia()
    while(User.hitpoints > 0 && shia.hitPoints > 0){

    }

}

function walkOrFight() {
    while (walk === true) {
        if (Math.random() < .75 ){
            var walking = readlineSync.keyIn("Press 'w' to walk... ", {
                limit: "w"
            });
        } else {
            fightShia();
        }
    }
}
walkOrFight();