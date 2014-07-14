var mongodb = require('mongodb');
var server = new mongodb.Server('127.0.0.1', 27017, { });

var client = new mongodb.Db('mtest', server);

client.open(function(err) {
	if (err) throw err;
	client.collection('test_insert', function(err, collection) {
		if (err) throw err;
		console.log('We are now able to perform queries.');
		/*collection.insert(
		{
			"title": "I like cake",
			"body": "It is quite good."
		},
		{safe: true},
		function(err, documents) {
			if (err) throw err;
			console.log('Document ID is: ' + documents[0]._id);
		});*/
		// update
		/*var _id = new client.bson_serializer.ObjectID('53c3f6cdf2970e2a19a72921');
		collection.update(
			{_id: _id},
			{$set: {"title": "I ate too much cake"}},
			{safe: true},
			function(err) {
				if (err) throw err;
				
		});*/
		/*collection.find({"title": "I like cake"}).toArray(
			function(err, results) {
				if (err) throw err;
				console.log(results);
		});*/

		collection.find({}).toArray(
			function(err,results){
				if (err) throw err;
				console.log(results);
			});
	});

});
/*client.close(function(err) {
	if (err) throw err;
});*/