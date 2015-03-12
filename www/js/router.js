

define([

	'backbone',
	'view/home',
	'view/level',
	'view/game'
],
function (

	Backbone,
	homeView,
	levelView,
	gameView
) {

	'use strict';


	return Backbone.Router.extend({

		routes: {

			'': 'routeDefault',
			'level/:operator': 'routeLevel',
			'game/:operator/:level': 'routeGame',
		},

		initialize: function () {

			this.radio = Backbone.Wreqr.radio.channel('global');

			Backbone.history.start();
		},

		routeDefault: function () {

			this.radio.reqres.request('region', 'screen').show( new homeView() );
		},

		routeLevel: function (operator) {

			this.radio.reqres.request('region', 'screen').show(

				new levelView ({

                    'operator': operator
                })
            );
		},

		routeGame: function (operator, level) {

			this.radio.reqres.request('region', 'screen').show(

				new gameView ({

                    'operator': operator,
                    'level': level
                })
            );
		},
	});
});
