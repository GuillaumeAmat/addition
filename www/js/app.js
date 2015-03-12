

define([

	'underscore',
	'backbone',
	'marionette',
	'backbone.radio',
	'view/buttonBackHome'
],
function (

	_,
	Backbone,
	Marionette,
	radio,
	buttonBackHomeView
) {

	'use strict';

	var app = Marionette.Application.extend({

		initialize: function(options) {

			this.radio = Backbone.Radio.channel('global');

			var self = this,
			container = $('.container');


			this.addRegions({

				'screen': '.screen',
				'button_back_home': '.button_back_home'
			});


			$(window).on('resize', function () {

                var hauteur = container.height();
                var largeur = (hauteur * 320 / 480);

                if (largeur > $('body').width())
                {
                    largeur = $('body').width();
                    hauteur = (largeur * 480 / 320);
                }
				container.width(largeur);
				container.height(hauteur);
			})
			.trigger('resize');
            

			Marionette.Behaviors.behaviorsLookup = function() {

				return self.behaviors;
			}


			this.view.buttonBackHomeView = new buttonBackHomeView();
			this.view.buttonBackHomeView.$el.hide();

			self.getRegion('button_back_home').show( self.view.buttonBackHomeView );

			this.radio.comply('buttonBackHome:show', function () {

				self.view.buttonBackHomeView.$el.show();
			});

			this.radio.comply('buttonBackHome:hide', function () {

				self.view.buttonBackHomeView.$el.hide();
			});
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
