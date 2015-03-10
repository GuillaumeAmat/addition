

requirejs.config({

	baseUrl: 'js',
	paths: {

		'templates': '../templates/templates',
        'underscore': '../bower_components/underscore/underscore',
		'backbone': '../bower_components/backbone/backbone',
		'backbone.radio': '../bower_components/backbone.radio/build/backbone.radio.min',
		'marionette': '../bower_components/marionette/lib/backbone.marionette.min',
		'jquery': '../bower_components/jquery/dist/jquery.min',
		'webL10n': '../bower_components/webL10n/l10n',
	},

	deps: [

		'jquery',
		'backbone',
		'marionette',
		'webL10n'
	],
	shim: {}
});
