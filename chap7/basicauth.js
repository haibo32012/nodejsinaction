var connect = require('connect');
var app = connect()
	.use(connect.basicAuth('tj','tobi'))
	.use(function(req,res) {
		res.write('Hello World!');
		res.end();
	});
app.listen(3000);