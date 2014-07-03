var connect = require('connect');
var fs = require('fs');
var log = fs.createWriteStream('./myapp.log',{flags: 'a'});
var app = connect()
	.use(connect.logger({format: ':method :url', stream: log}))
	.use(function (req,res) {
		console.log('hello');
		res.end();
	})
	.listen(3000);