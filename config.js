/*global require:true, __dirname:true, process:true, console:true, module:true */

// The purpose of this file is to setup the use of
// configuration files for our node development server.

// Modules & Variables.
var nconf = require('nconf'),
	fs = require('fs'),
	config = {};

// Setup nconf to use (in-order) command-line arguments and environment variables.
nconf.argv().env();

// Configure nconf to use config.json file.
nconf.file({file: __dirname + '/config/config.json'});

// Export module.
module.exports = config;