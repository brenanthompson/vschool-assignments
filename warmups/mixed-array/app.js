var inputArr = ["cat", [1, 2, 3], "dog", 1, 4, {name: "john"}, ["pie", "cake"]];

function arraySorter(inputArr) {
	var output = {
		 strings: [],
		 arrays: [],
		 objects: [],
		 numbers: [],
	}

	for (var i = 0; i < inputArr.length; i++) {
		if (typeof inputArr[i] === 'string') {
			output.strings.push(inputArr[i]);
		} else if (typeof inputArr[i] === 'number') {
			output.numbers.push(inputArr[i]);
		} else if (inputArr[i] instanceof Array) {
			output.arrays.push(inputArr[i]);
		} else if (typeof inputArr[i] === 'object') {
			output.objects.push(inputArr[i]);
		} 
	}
	
//	console.log("Strings: " + output.strings);
//	console.log("Arrays: " + output.arrays);
//	console.log("Objects: " + output.objects);
//	console.log("Numbers: " + output.numbers);

	
	console.log(output);
}

arraySorter(inputArr);
