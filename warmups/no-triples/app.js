var ints = [1, 4, 23, 4, 6, 3, 4, 53, 2, 4, 5, 6, 3, 4, 53, 2, 4, 5, 6, 7, 43, 4, 3, 2, 4, 4, 4, 3, 2, 5, 4, 5, 5];

var noTriples = function (ints) {
	for (var i = 0; i < ints.length; i++) {
		if (ints[i] === ints[i + 1] && ints[i + 1] === ints[i + 2]) {
			return false;
		} 
    }
			return true;
}
console.log(noTriples(ints));