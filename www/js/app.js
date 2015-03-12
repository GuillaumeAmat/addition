

define([

	'jquery',
	'underscore',
	'backbone',
	'marionette',
	'router',
	'view/buttonBackHome'
],
function (

	$,
	_,
	Backbone,
	Marionette,
	router,
	buttonBackHomeView
) {

	'use strict';

	return Marionette.Application.extend({

		initialize: function(options) {

			this.radio = Backbone.Wreqr.radio.channel('global');


			this.addRegions({

				'screen': '.screen',
				'button_back_home': '.button_back_home'
			});

			this.radio.reqres.setHandler('region', this.replyRegion, this);


			var $container = $('.container');

			$(window).on('resize', function () {

                var hauteur = window.innerHeight,
				largeur = (hauteur * 320 / 480);

                if (largeur > window.innerWidth) {

                    largeur = window.innerWidth;
                    hauteur = (largeur * 480 / 320);
                }

				$container.width(largeur);
				$container.height(hauteur);
			})
			.trigger('resize');
		},

		onStart: function (options) {

			var self = this;

			$(window).on('localized', function () {

				self.onLocalized();
			});

			require(['webL10n']);
		},

		onLocalized: function () {

			var self = this;

			this._buttonBackHomeView = new buttonBackHomeView();
			this._buttonBackHomeView.$el.hide();

			self.getRegion('button_back_home').show( self._buttonBackHomeView );

			this.radio.commands.setHandlers({

				'buttonBackHome:show': function () {

					self._buttonBackHomeView.$el.show();
				},
				'buttonBackHome:hide': function () {

					self._buttonBackHomeView.$el.hide();
				}
			});

			new router();
		},

		replyRegion: function (regionName) {

			return this.getRegion( regionName );
		},
	});
});
