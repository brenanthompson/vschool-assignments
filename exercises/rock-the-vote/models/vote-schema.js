var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var voteSchema = new Schema({
	title:{
		type: String,
		required: true,
		unique: true
	},
	description: String, 
	votes: {
		type: Number,
		default: 0
	},
	comments:[String]
});

var Vote = mongoose.model('Vote', voteSchema);

module.exports = Vote;