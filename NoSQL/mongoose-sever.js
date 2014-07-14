var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/tasks');

var Schema = mongoose.Schema;
var Tasks = new Schema({
	project: String,
	description: String
});
mongoose.model('Task', Tasks);

var Task = mongoose.model('Task');
/*var task = new Task( );
task.project = 'Bikeshed';
task.description = 'Paint the bikeshed red.';
task.save(function(err) {
	if (err) throw err;
	console.log('Task saved.');
});*/

Task.find({'project': 'Bikeshed'}).forEach(function(err, task) {
	if (task != null) {
		console.log('ID:'  + task._id);
		console.log(task.description);
	}
});