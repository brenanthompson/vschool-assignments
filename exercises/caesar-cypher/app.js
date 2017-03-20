var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));
var alphabet = "abcdefghijklmnopqrstuvwxyz";

function cypher(input, shift) {
	var newString = "";
	for (var i = 0; i < input.length; i++) {
		var char = input[i];
		
		var indexOfAplhabet = alphabet.indexOf(char);
		var newPosition = indexOfAplhabet + shift;
		if (newPosition > 25) {
			newPosition = newPosition - 26;
		}
		var newCharacter = alphabet[newPosition];
		
		if (indexOfAplhabet === -1) {
			newCharacter = char;
		}
		newString += newCharacter;
	}
	return newString;
}

console.log(cypher(input, shift))