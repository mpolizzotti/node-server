// The purpose of this file is to setup & configure the express server.

// ===========================================
// Modules.
// ===========================================
var express           = require('express'),
    nconf             = require('nconf');
    fs                = require('fs');
    winston           = require('winston');
    config            = require('./config');

// ===========================================
// Express configuration.
// ===========================================
// Create server.
var app = express.createServer();

// Listen on Port.
app.listen(nconf.get('PORT'));

// Development.
app.configure('development', function(){
  winston.remove(winston.transports.Console);
  winston.add(winston.transports.Console, {level: 'verbose', colorize: true, json: false, handleExceptions: true});
});

// Production.
app.configure('production', function(){
  winston.remove(winston.transports.Console);
  winston.add(winston.transports.Console, {level: 'info', colorize: false, json: false, handleExceptions: true});
});

// Views.
app.configure(function () {
  app.set('view engine', 'jade');
  app.set('views', __dirname + '/views');
  app.set('view options', { layout: false });
  app.use(express.favicon());
  app.use(express.cookieParser());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

// Routes.
require('./routes')(app);

// Export module.
module.exports = app;