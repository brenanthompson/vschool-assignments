var express = require("express");
var voteRoute = express.Router();
var Vote = require("../models/vote-schema")

voteRoute

	.get("/", function (req, res) {
		console.log(req.query)
		Vote.find(req.query, function (err, votesArr) {
			res.send(votesArr);
		})
	})

	.post("/", function (req, res) {
		console.log(req.body);
		newVote = new Vote(req.body);
		newVote.save(function (err, savedVote) {
			res.send(savedVote)
		});
	})

.delete("/:id", function (req, res){
	Vote.findByIdAndRemove(req.params.id, function (err, deletedVote) {
		res.send(deletedVote);
	})
})

.put("/:id", function(req, res){
	Vote.findByIdAndUpdate(req.params.id, req.body, {
		new: true
	}, function(err, editedVote) {
		res.send(editedVote);
	})
})

module.exports = voteRoute
