// Modules.
var nconf = require('nconf');

// Manage all page routes.
module.exports = function(app) {

	// Renders universal response.
	var response = function (req, res) {
		res.render('index', {
			title: 'Node Server',
			dev: true
		});
	};

	// Page routes.
	app.get('/', response);
	app.get('/home', response);
};