

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
			screen = self.getRegion('screen').$el;


			$(window).on('resize', function (a, b, c) {

				screen.width( (screen.height() * 320) / 480 );
			})
			.trigger('resize');


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
