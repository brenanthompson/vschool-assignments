var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require ("mongoose");
var port = 8000;
var app = express();

app.use(bodyParser.json());

//app.use("/", require("./podRouter"));

app.use(express.static("public"))

app.listen(port, function(){
	console.log("Server is rocking and rolling on " + port)
})