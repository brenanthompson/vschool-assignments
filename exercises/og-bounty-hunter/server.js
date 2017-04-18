var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 3030;
//var bountyRouter = require("./bounties")
//var bounties = [];
var uuid = require("uuid/v4");

//app.use(bodyParser.json())

//app.use("/bounty", bountyRouter);

var path = require("path");
//app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("public"));

var bounties = [{
	fName: "Jason",
	lName: "Lee",
	price: 23409,
	_id: "v03f9u230"
},
{
	fName: "Geraldo",
	lName: "Rivera",
	price: 409,
	_id: "23f09"
}];

app.get("/bounties", function(req, res){
	res.send(bounties)
})

//app.use(function(req, res, next) {
//	req.body.weAddedThis = 'middlewawre is cool';
//})

app.listen(port, function () {
	console.log('Server is listening on port ' + port)
});
