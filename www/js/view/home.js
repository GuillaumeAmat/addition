
define(['app', 'templates', 'jquery', 'backbone'], function (app, templates, $, Backbone) {

	'use strict';

	return Marionette.LayoutView.extend({

		template: JST['home.html'],
	});
});
