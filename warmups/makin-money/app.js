var num = 123456789; // returns $1,234,567.89 


function formatMoney(num) {
	var money = "$" + (num/100).toFixed(2)/*toString() would also work*/.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
	console.log(money);
}

formatMoney(num);

//WAY EASIER!
//function formatMoney(num) {
//	return (num/100).toLocaleString('en-US', {style:'currency', currency:"USD"})
//}
//
//console.log(formatMoney(num));
