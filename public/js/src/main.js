/*jshint nomen:true */
/*global requirejs:true, require:true */

// Require Configuration.
requirejs.config({
	paths: {
		debug: '../lib/debug/debug',
		jquery: '../lib/require/require-jquery',
		underscore: '../lib/underscore/underscore'
	},
	shim: {
		'debug': {
			deps: [],
			exports: 'debug'
		},
		'underscore': {
			deps: [],
			exports: '_',
			init: function () {
				'use strict';
				return this._.noConflict();
			}
		}
	}
});

require(
	['app'],
	function (app) {
		'use strict';
		app.init();
	}
);