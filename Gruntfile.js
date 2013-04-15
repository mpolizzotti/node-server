/*global exports:true, module:true, require:true */

// Modules & variables.
var nconf = require('nconf'),
	config = require('./config');

// Grunt.
module.exports = function (grunt) {
	'use strict';

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// Cleans out directories.
		clean: {
			prod: [
				'target/app/css',
				'target/app/img',
				'target/app/js',
				'target/app/templates',
				'target/app/*.html',
				'target'
			]
		},

		// Lint settings.
		jshint: {
			options: {
				nomen: false,
				curly: true,
				camelcase: true,
				eqeqeq: true,
				newcap: true,
				undef: true,
				trailing: true,
				strict: true,
				latedef: true,
				indent: true,
				quotmark: true
			},
			global: {
				define: true,
				window: true,
				document: true
			},
			all: [
				'public/js/src/**/*.js',
				'public/js/src/*.js',
				'config/*.js',
				'tasks/*.js',
				'*.js'
			]
		},

		// Copy assests.
		copy: {
			prod: {
				files: [
					{
						src: ['**'],
						dest: 'target/app/img/',
						expand: true,
						cwd: 'public/img/'
					},
					{
						src: ['**'],
						dest: 'target/app/templates/',
						expand: true,
						cwd: 'public/templates/'
					}
				]
			}
		},

		// Compile less files into css.
		less: {
			dev: {
				files: {
					'public/css/app.css': 'public/less/app.less'
				}
			},
			prod: {
				files: {
					'target/app/css/app.css': 'public/less/app.less'
				},
				options: {
					compress: true
				}
			}
		},

		// Compress JavaScript code.
		requirejs: {
			compile: {
				options: {
					baseUrl: './public/js/src',
					mainConfigFile: './public/js/src/main.js',
					out: './target/app/js/main.js',
					name: 'main',
					preserveComments: false
				}
			}
		},

		// Compile html files and copy to target directories.
		compilehtml: {
			prod: {
				options: {
					dev: false
				},
				src: 'views/layout.html',
				dest: 'target/app/index.html'
			}
		}
	});

	// Load plugins/tasks.
	grunt.loadNpmTasks('grunt-contrib');
	grunt.task.loadTasks('tasks');

	// Register tasks.

	// Build command for development environment.
	grunt.registerTask('dev', [
		'jshint',
		'less:dev'
	]);

	// Build command for production-ready code.
	// Pushes code to /target directory.
	grunt.registerTask('prod', [
		'clean:prod',
		'jshint',
		'copy:prod',
		'less:prod',
		'requirejs',
		'compilehtml:prod'
	]);
};