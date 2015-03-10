

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

			this.radio = Backbone.Radio.channel('global');

			var self = this,
			regions = this.addRegions({

				'screen': '.screen'
			}),
			height = regions.screen.$el.height(),
			width = height * 320 / 480;

			// console.log(width, height);
			// regions.screen.$el.width(width)


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
