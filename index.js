(function () {
	"use strict";

	var path = require("path");

	var includePaths = [
		path.join(__dirname, "compass", "stylesheets")
	];

	module.exports = {
		includePaths: includePaths
	};
}());
