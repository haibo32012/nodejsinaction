var http = require('http');
var parse = require('url').parse;
var join = require('path').join;
var fs = require('fs');
var root = __dirname;
var server = http.createServer(function(req,res) {
	var url = parse(req.url);
	var path = join(root,url.pathname);
	res.end('Hello World!');
	console.log(path);
});
server.listen(3000);