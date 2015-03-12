

define([

	'marionette',
	'templates',
],
function (

	Marionette
) {

	'use strict';

	return Marionette.LayoutView.extend({

		template: JST['buttonBackHome.html']
	});
});
