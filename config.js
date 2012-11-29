// The purpose of this file is to setup configuration files.

// ===========================================
// Import Modules.
// ===========================================
var nconf     = require('nconf');
    fs        = require('fs');
    winston   = require('winston');

// ===========================================
// Configuration.
// ===========================================
// Set up configuration object.
var config = {};

// Setup nconf to use (in-order) command-line arguments and environment variables.
// nconf is a simple key-value store used to store data pertaining to configuration files,
// environment variables and command-line arguments.
nconf.argv().env();

// Define production/development configuration files.
// NODE_ENV is an environment variable that can be defined
// and set when the server is started (i.e., NODE_ENV=production node app.js).
var NODE_ENV = process.env.NODE_ENV || 'development';

// Define configuration path.
config.path = __dirname + '/config';

// Define config.json file path.
config.configFile = config.path + '/config.json';

// Define development/production.json file path.
config.envConfigFile = config.path + '/' + NODE_ENV + '.json';

// Verify configuration path exists.
try {
  var stats = fs.lstatSync(config.path);
  winston.info('Using configuration path: ', config.path);}
catch (e) {
  winston.log('error', 'Configuration path not found: ', config.path);}

// Load into nconf.
nconf.file({file: config.configFile});
nconf.defaults(JSON.parse(fs.readFileSync(config.envConfigFile, 'utf-8')));

// Export module.
module.exports = config;