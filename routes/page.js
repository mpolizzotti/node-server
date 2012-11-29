// Modules.
var nconf = require('nconf');

/**
 * Routes associated with serving pages.
 * @param {Object} app
 */
module.exports = function(app) {
  
  // Route: Default index page.
  app.get('/', function (req, res) {
    res.render('index', {
      nconf: nconf
    });
  });
  
};