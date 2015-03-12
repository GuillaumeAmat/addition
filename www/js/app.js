

define([

	'underscore',
	'backbone',
	'marionette',
	'router',
	'view/buttonBackHome'
],
function (

	_,
	Backbone,
	Marionette,
	router,
	buttonBackHomeView
) {

	'use strict';

	var app = Marionette.Application.extend({

		initialize: function(options) {

			var self = this,
			container = $('.container');


			this.radio = Backbone.Wreqr.radio.channel('global');


			this.addRegions({

				'screen': '.screen',
				'button_back_home': '.button_back_home'
			});

			this.radio.reqres.setHandler('region', this.replyRegion, this);



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
		},

		onStart: function (options) {

			new router();
		},

		replyRegion: function (regionName) {

			return this.getRegion( regionName );
		},
	});

	return new app();
});
