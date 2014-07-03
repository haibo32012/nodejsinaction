var connect = require('connect');
var app = connect()
	.use(connect.static('public'))
	.use(function(req,res) {
		console.log('success!');
	})

app.listen(3000);