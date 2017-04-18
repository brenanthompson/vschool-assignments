var express = require("express");
var app = express();

var fruit = [
	{
		"type": "banana",
		"brand": "chiquita",
		"price": 0.5
	},
	{
		"type": "apple",
		"brand": "gala",
		"price": 0.5
	},
	{
		"type": "orange",
		"brand": "naval",
		"price": 0.75
	},
	{
		"type": "banana",
		"brand": "manzano",
		"price": 1.00
	},
	{
		"type": "banana",
		"brand": "bread-style",
		"price": 0.5
	}
]

app.get("/fruit", function(req, res) {
	console.log(req.query);
	foundItems = [];

	for (var i = 0; i < fruit.length; i++) {
		
			var exactMatch = true;

		for (var key in req.query) {
			if (req.query[key] != fruit[i][key]) {
				exactMatch = false;
			}
		}
		if (exactMatch){
			foundItems.push(fruit[i]);
		}
	}
	
	

	res.send(foundItems);
});

app.listen(8000, function () {
	console.log('Server is rocking and rolling on port 8000')
});
