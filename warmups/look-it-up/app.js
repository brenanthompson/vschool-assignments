var dictionary = {};

//function Dictionary (word, definition){
//	this.word = word;
//	this.definition = definition;
//}

function addWord(word, definition){
	word = word.toLowerCase();
	dictionary[word] = definition;
}

addWord('cat', 'an animal that hates you');

console.log(dictionary);

function lookUp(word){
	if(dictionary[word] === undefined){
		console.log('That word is not in the dictionary yet.')
	} else {
		return dictionary[word];
	}
}

console.log(lookUp('cat'));