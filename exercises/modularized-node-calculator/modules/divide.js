function Divider(a, b) {
	this.a = a;
	this.b = b;
	this.divider = function (a, b) {
		return (parseInt(a / b));
	}
};
module.exports = new Divider;
