function asycFunction(callback) {
	setTimeout(function() {
		callback()
	},200);
}

var color = 'blue';
(function (color) {
	asycFunction(function() {
		console.log('The color is ' + color);
	})
})(color);

color = 'green';