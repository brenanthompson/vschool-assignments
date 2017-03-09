var readlineSync = require("readline-sync");

var numberOne = readlineSync.question("Please enter your first number: ");
var numberTwo = readlineSync.question("Please enter your second number: ");
var operation = readlineSync.keyIn("Please enter the operation to perform (+, -, *, /): ", {
	limit: "+, -, *, /"
});
//var operators = [];
function mathMayhem(numberOne, numberTwo) {
	if (operation == "+") {
		return (parseInt(numberOne) + parseInt(numberTwo));
	} else if (operation == "-") {
		return (parseInt(numberOne) - parseInt(numberTwo));
	} else
	if (operation == "*") {
		return (parseInt(numberOne) * parseInt(numberTwo));
	} else if (operation == "/") {
		return (parseInt(numberOne) / parseInt(numberTwo));

	}
}

console.log("The result is: " + mathMayhem(numberOne, numberTwo));