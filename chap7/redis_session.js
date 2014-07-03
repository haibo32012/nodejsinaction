var connect = require('connect');
var RedisStore = require('connect-redis')(connect);

var app = connect()
	.use(connect.favicon())
	.use(connect.cookieParser('keyboard cat'))
	.use(connect.session({store: new RedisStore({prefix: 'sid'})}))
	.use(function (req,res) {
		res.write('Hello world');
		res.end();
	});
app.listen(3000);