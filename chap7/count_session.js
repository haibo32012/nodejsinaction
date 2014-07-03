var connect  = require('connect');
var app = connect()
	.use(connect.cookieParser('keyboard cat'))
	.use(connect.session())
	.use(function(req,res,next) {
		//req.session.cart = {items: [1,2,3]};
		req.session.cookie.maxAge = 5000;
		var sess = req.session;

		if (sess.views) {
			res.setHeader('Content-Type','text/html');
			res.write('<p>views: ' + sess.views + '</p>');
			res.write('<p>expires in: ' + (sess.cookie.maxAge /1000) + 's</p>');
			res.write('<p>httpOnly: ' + sess.cookie.httpOnly + '</p>');
			res.write('<p>path: ' + sess.cookie.path + '</p>');
			res.write('<p>domain: ' + sess.cookie.domain + '<.p>');
			res.write('<p>secure: ' + sess.cookie.secure + '</p>');
			res.end();
			//req.session.cart.items.push(4);
			//console.log(req.session);

			sess.views++;
		} else {
			sess.views = 1;
			res.end('welcome to the session demo. refresh!');
		}
	});
app.listen(3000);