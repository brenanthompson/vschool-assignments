//var isPalindrome = "I madam, I made radio! So I dared! Am I mad?? Am I?!";
var reverseArray = [];
var reverseString = "";

function reversePalindrome(input){
	var lowerCase = input.toLowerCase();
	var noPunctuation = lowerCase.replace(/\W+/gi, "");
	var reverseString = noPunctuation.split("").reverse().join("");
	console.log(noPunctuation);
	console.log(reverseString);
	
	if(noPunctuation === reverseString){
		console.log(true) 
	} else {
		console.log(false) 
	};

	
}

console.log(reversePalindrome(isPalindrome));

//Write a function that accepts a string as an argument and returns true if the string is a palindrome (the string is the same forward and backward), or false if it is not.
//
//A string is still considered a palindrome despite letter capitalization, spaces, or punctuation.
//
//E.g.:
//
//isPalindrome("Star Rats!");  // true  
//isPalindrome("palindrome");  // false  
//isPalindrome("I madam, I made radio! So I dared! Am I mad?? Am I?!");  // true  