var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/tasks');

var Schema = mongoose.Schema;
var Tasks = new Schema({
	project: String,
	description: String
});

mongoose.model('Tasks', Tasks);

var Task = mongoose.model('Task');
var task = new Task( );
task.project = 'Bikeshed';
task.description = 'Paint the Bikeshed red';
task.save(function(err) {
	if (err) throw err;
	console.log('Task saved.');
});

Task.find({'project': 'Bikeshed'}).each(function(err, task) {
	if (task != null) {
		console.log('ID: ' + task._id);
		console.log(task.description);
	}
});

Task.update({
	_id: '4e65b793d0cf5ca508000001'},
	{description: 'Paint the Bikeshed green.'},
	{multi:false},
	function(err, rows_updated) {
		if (err) throw err;
		console.log('Updated.');
	});

Task.findById('4e65b3dce1592f7d08000001', function(err, task) {
	task.remove();
});