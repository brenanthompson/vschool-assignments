var express = require('express');
var bounties = [];
var uuid = require("uuid/v4");
//var bodyParser = require('body-parser');

var bountyRouter = express.Router();

bountyRouter.route("/")

	//.use(bodyParser.json())

	.get("/", function (req, res) {
		res.send(bounties);
	})

	.post("/", function (req, res) {
		var newBounty = req.body;
		newBounty._id = uuid();
		bounties.push(newBounty);
		res.send(`${req.body.bounty} has been added to your list`)
	});

bountyRouter.route("/:firstName")

	.delete("/:firstName", function (req, res) {
		var name = req.params.firstName;

		for (var i = 0; i < bounties.length; i++) {
			if (name === bounties[i].firstName) {
				res.send(bounties.splice(i, 1));
			}
		}
		console.log(req.params);
	});

bountyRouter.route("/:id")
	.put("/:id", function (req, res) {
		var dude = req.body
		console.log(dude)
		for (var i = 0; i < bounties.length; i++) {
			if (dude.id === bounties[i].id) {
				for (var value in dude) {
					if (bounties[i][value] !== dude[value]) { /*value is whatever you are changing. (key: value)*/
						bounties[i][value] = dude[value]
					}
					res.send(bounties[i]);
				}
			}
		}
	})

module.exports = bountyRouter;