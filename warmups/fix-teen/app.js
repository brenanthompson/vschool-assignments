function fixTeen(n) {
	for (var i = 0; i < 3; i++) {
		if (n === 15 || 16) {
			return n = n;
		} else if (n >= 13 && n <= 19) {
			return n = 0;
		} else {
			return n = n;
		}
	}
}

function noTeenSum(a, b, c) {
	a = fixTeen(a);
	b = fixTeen(b);
	c = fixTeen(c);
	return a + b + c;
}

console.log(noTeenSum(12, 14, 16));