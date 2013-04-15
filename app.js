/*jshint es5:true */
/*global require:true, __dirname:true, console:true, process:true, setTimeout:true */

// Modules & Variables.
var express = require('express'),
	http = require('http'),
	nconf = require('nconf'),
	less = require('less-middleware'),
	hogan = require('hogan-express'),
	config = require('./config'),
	app;

// Express configuration.
app = express();

// All server configurations.
app.configure(function () {
	'use strict';

	// settings.
	app.set('port', nconf.get('PORT') || 3000);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'html');
	app.set('layout', 'layout');
	app.engine('html', hogan);

	// middleware.
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(less(nconf.get('LESS')));
	app.use(express.errorHandler());
	app.use(express.static(__dirname + '/public'));
});

// Routes.
require('./routes')(app);

// Startup.
http.createServer(app).listen(app.get('port'), function () {
	'use strict';
	console.log('Express server listening on port ' + app.get('port'));
});