// Configure require.js.
require.config({
  catchError: {
    define: true
  },
  paths : {
    // Libs.
    underscore:         "libs/underscore/underscore",
    backbone:           "libs/backbone/backbone",
    
    // Loaders.
    jqueryLoader:       "libs/jquery/jquery-loader",
    underscoreLoader:   "libs/underscore/underscore-loader",
    backboneLoader:     "libs/backbone/backbone-loader",
    
    // Templates.
    templates: "../templates"
  }
});

require([
  'underscore'
], function (_) {
  console.log('Require is ready.');
});