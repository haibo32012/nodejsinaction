var net = require('net');

net.createServer(function (socket) {
	socket.write('Hello World!\r\n');
	socket.on('close', function() {
		console.log('client disconnected');
	});
	socket.end();
}).listen(1337);
console.log('listeinging on port 1337');