var mongoose = require('mongoose');

module.exports = mongoose.model('heartbeat', {
	parameter : String,
	date : String,
	value : String
});