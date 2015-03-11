

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
			container = $('.container');


			this.addRegions({

				'screen': '.screen'
			});


			$(window).on('resize', function () {

				container.width( (container.height() * 320) / 480 );
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
