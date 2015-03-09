

requirejs.config({
	
	baseUrl: 'js',
	paths: {
		'bower_components': '../bower_components/',
		'templates': '../templates/',
		'backbone': '../bower_components/backbone',
		'backbone.radio': '../bower_components/backbone.radio',
		'backbone.babysitter': '../bower_components/backbone.babysitter',
		'jquery': '../bower_components/jquery',
		'marionette': '../bower_components/marionette',
		'underscore': '../bower_components/underscore',
		'webL10n': '../bower_components/webL10n'
		
	},
	
	deps: [
		'jquery',
		'backbone,
		'marionette',
		'webL10n'
		
	],
	shim: {}
	
	
	
});
