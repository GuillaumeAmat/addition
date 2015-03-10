

define([

	'underscore',
	'backbone',
	'marionette',
	'backbone.radio',
],
function (_, Backbone) {

	'use strict';

	var app = Marionette.Application.extend({

		initialize: function(options) {

			var self = this;

			this.radio = Backbone.Radio.channel('global');

			this.addRegions({

				screen: '.screen',
			});

			Marionette.Behaviors.behaviorsLookup = function() {

				return self.behaviors;
			}
		},

		onStart: function (options) {

			Backbone.history.start();
		},


		behaviors: {},
		collection: {},
		model: {},
		view: {},

		var: {

			currentScreen: null
		}
	});

	return new app();
});
