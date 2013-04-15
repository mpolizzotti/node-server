/*jshint nomen:false */
/*global define:true, document:true */

define(
	[
		'debug',
		'jquery',
		'underscore'
	],
	function (debug, $, _) {
		'use strict';

		/**
		Root namespace container for the application.

		@class app
		**/
		var app = {

			/**
			Entry point for the app.

			@method init
			**/
			init: function () {
				debug.info('Application Bootstrapped.');
			}
		};

		return app;
	}
);