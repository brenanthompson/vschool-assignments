var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var voteRoute = require("./routes/vote-route");
var mongoose = require("mongoose");

app.use(express.static("public"));

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/rock-the-vote', function(err){
	if (err) throw err;
	console.log("Connected to DB")
})

app.use("/votes", voteRoute)

app.listen(8000, function(){
	console.log("bingo")
});