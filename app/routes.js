var Heartbeat = require('./models/heartbeat');

module.exports = function(app) {

	// api ---------------------------------------------------------------------
	// get all heartbeats
	app.get('/api/heartbeats', function(req, res) {

		// use mongoose to get all heartbeats in the database
		Heartbeat.find(function(err, heartbeats) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(heartbeats); // return all heartbeats in JSON format
		});
	});

	// create heartbeats and send back all pictures after creation
	app.post('/api/heartbeats', function(req, res) {

		// create a heartbeeet, information comes from AJAX request from Angular
		Heartbeat.create({
			parameter : req.body.parameter,
			date : req.body.date,
			value : req.body.value
		}, function(err, heartbeat) {
			if (err)
				res.send(err);
		});

	});

	// delete a heartbeat
	// app.delete('/api/heartbeats/:heartbeat_id', function(req, res) {
	// 	Heartbeat.remove({
	// 		_id : req.params.heartbeat_id
	// 	}, function(err, heartbeat) {
	// 		if (err)
	// 			res.send(err);
	// 		// get and return all the heartbeats after you create another
	// 		Heartbeat.find(function(err, heartbeats) {
	// 			if (err)
	// 				res.send(err)
	// 			res.json(heartbeats);
	// 		});
	// 	});
	// });

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};