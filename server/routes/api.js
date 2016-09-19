var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var assert = require('assert');

/* database stuff */


// Connection URL
var url = 'mongodb://localhost:27017/myproject';

// Use connect method to connect to the server
mongo.connect(url, function (err, db) {
	assert.equal(null, err);
	console.log("Connected successfully to server");
	db.close();
});

/* output formatting */
function output(res, data) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
}

/* calls */
router.post('/fetch', function (req, res, next) {
	mongo.connect(url, function(err, db) {
		var posts = db.collection('posts');
		var cursor = posts.find({});

		cursor.toArray(function(err, results){
			output(res, {
				posts: results
			});

			db.close();
		});
	});
});

router.post('/post', function (req, res, next) {
	// parse the submitted post
	var text = "stop repeating yourself you retard";

	mongo.connect(url, function(err, db) {
		var posts = db.collection('posts');

		posts.insert({
			text: text
		});

		output(res, {'result': 'okay'});
		db.close();
	});
});

module.exports = router;
