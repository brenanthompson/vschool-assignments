var repeats = "dddddddofjwof";
var repArray=Array.from(repeats);
var nonRepeat = [];
//console.log (repArray);

function firstRepeat(repArray){
	for(var i = 0; i < repArray.length; i++){
		if (repArray[i] !== repArray[0] && repArray!== repArray[i-1]){
			nonRepeat.push(repArray[i]);
			console.log(nonRepeat);
			console.log(repArray[i]);
			return;
		}
	}
}

firstRepeat(repArray);