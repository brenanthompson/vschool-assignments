var express = require('express');
var bodyParser = require("body-parser");
var app = express();
var port = 3000;

app.use(bodyParser.json());

var dogs = [];

app.get('/', function (req/*reques*/, res/*response*/) {
	res.send("Hello World!");
});

app.post('/dogs', function(req, res){
	console.log(req.body);
	dogs.push(req.body.dog);
	res.send('Your dog ${req.body.dog} has been added');
});

app.listen(port, function() {
	console.log("The server is listening on port " + port)
});