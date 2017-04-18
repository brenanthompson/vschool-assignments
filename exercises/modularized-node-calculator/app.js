var readlineSync = require('readline-sync');


var numberOne = readlineSync.question("Please enter your first number: ");
var numberTwo = readlineSync.question("Please enter your second number: ");
var operation = readlineSync.keyIn("Please enter the operation to perform (+, -, *, /, ^('a' to the power of 'b')): ", {
	limit: "+, -, *, /, ^"
});

function mathMayhem(numberOne, numberTwo) {
	if (operation === "+") {
		return (add(numberOne, numberTwo));
	} else if (operation === "-") {
		return (subtract(numberOne, numberTwo));
	} else if (operation === "*") {
		return (multiply.multiplay(numberOne, numberTwo));
	} else if (operation === "/") {
		return (divide.divider(numberOne, numberTwo));
	} else if (operation === "^") {
		return (exponent(numberOne, numberTwo));

	}
}
var add = require('./modules/add'); /* 1. Overwrite original module.exports object */
var subtract = require('./modules/subtract').subtract; /* 2. Add a function expression as a property*/
var Multiplier = require('./modules/multiply');
var multiply = new Multiplier();/* 4. Define a function constructor, but then overwrite module.exports with the entire function constructor. */
var divide = require('./modules/divide'); /* 3. Use a function constructor to overwrite module.exports with a new object of your own.*/
var exponent = require('./modules/exponent');

console.log("The result is: " + mathMayhem(numberOne, numberTwo));