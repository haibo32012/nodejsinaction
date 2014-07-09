var fs = require('fs');

module.exports = function move(oldpath,newpath,callback) {
	fs.rename(oldpath,newpath,function(err) {
		if (err) {
			if (err.code === 'EXDEV') {
				copy();
			} else {
				callback(err);
			}
			return;
		}
		callback();
	});

	function copy() {
		var readStream = fs.createReadStream(oldpath);
		var writeStream = fs.createWriteStream(newpath);
		readStream.on('error', callback);
		writeStream.on('error', callback);
		readStream.on('close', function() {
			fs.unlink(oldpath, callback);
		});
		readStream.pipe(writeStream);
	}
}