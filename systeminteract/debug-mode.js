var debug;
if (process.env.DEBUG) {
	debug = function (data) {
		console.error(data);
	};
} else {
	debug = function () { };
}

debug('this is a debug call');

console.log('Hello World!');

debug('this another debug call');

process.on('exit', function(code) {
	console.log('Exiting...');
});

//process.on('uncaughtException', function(err) {
//	console.error('got uncaught exception:', err.message);
//	process.exit(1);
//});

//throw new Error('an uncaught exception');

process.on('SIGINT', function() {
	console.log('Got Ctrl+C!');
})