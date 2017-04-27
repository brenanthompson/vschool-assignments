var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require ("mongoose");
var port = 8000;
var app = express();
var Audiosearch = require("./audiosearch-client-node-master/index");
var config = require('./config');


app.use(bodyParser.json());

//app.use("/", require("./podRouter"));


//
//app.get("/", function(req, res){
//    var audiosearch = new Audiosearch(config.audiosearchAppId, config.audiosearchSecret);
//
//    audiosearch.searchEpisodes(req.query.search).then(function (results) {
//        res.send(results)
//    });
//})

app.use(express.static("public"))

app.listen(port, function(){
	console.log("Server is rocking and rolling on " + port)
})
