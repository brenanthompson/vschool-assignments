//var readlineSync = require(“readline-sync”);
//var input = readlineSync.question("Type in whatever you want.");
//var letter = "A random String of UPPERCASE and lowercase"

function isCaps(letter) {
	return letter = letter.toUpperCase();
}
function lowercase(letter){
	return letter = letter.toLowerCase();
}

function antiCaps(input) {
	var output = "";
	for (var i = 0; i < input.length; i++){
		if (input[i] == input[i].toUpperCase()){
			output += input[i].toLowerCase();
		} else {
			output += input[i].toUpperCase();
		}
	}
	return output;
}
			
console.log(antiCaps("Hey Man, How's it going?"));			
//			
//			(isCaps(input[i])) {
//			var newLetter = input[i].toUpperCase();
//		} else {
//			var newLetter = input[i].toLowerCase();
//		}
//	var antiCapsArr = [];
//	}
//}
//
//console.log(isCaps(input));