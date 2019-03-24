var black = "\u001b[30m";
var red = "\u001b[31m";
var green = "\u001b[32m";
var yellow = "\u001b[33m";
var blue = "\u001b[34m";
var magenta = "\u001b[35m";
var cyan = "\u001b[36m";
var white = "\u001b[37m";
var reset = "\u001b[0m";
var reverse = "\u001b[7m";
var bold = "\u001b[1m";

module.exports = {
	warn: function(mes) {
		var tag = (white + "[" + yellow + "WARN" + white + "] " + yellow);
		console.log(tag + mes + reset);
	},
	info: function(mes) {
		var tag = (white + "[" + cyan + "INFO" + white + "] " + green);
		console.log(tag + mes + reset);
	},
	startup: function(port) {
		var tag = (white + "[" + magenta + "SERVER" + white + "] " + red);
		console.log(tag + "Listening on port " + port);
		console.log(tag + "Site is now active" + reset);
	},
	server: function(mes) {
		var tag = (white + "[" + magenta + "SERVER" + white + "] " + red);
		console.log(tag + mes + reset);
	},
	error: function(mes) {
		var tag = (white + "[" + bold + red + "ERROR" + reset + white + "] " + "\u001b[41m"  +white);
		console.log("\n" + tag + mes + reset);
	},
	smartInfo: function(mes) {
		var tag = (white + "[" + cyan + "INFO" + white + "] " + green);
		process.stdout.write(tag + mes + reset);
	},
	replace: function(mes) {
		var tag = (white + "[" + cyan + "INFO" + white + "] " + green);
		process.stdout.write("\r" + tag + mes + reset + " ");
	}
};

