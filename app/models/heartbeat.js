var mongoose = require('mongoose');

module.exports = mongoose.model('heartbeat', {
	capture : String,
	date : String,
	value : String
});