

define([

	'app',
	'backbone',
	'view/home',
	'view/level',
	'view/game'
],
function (

	app,
	Backbone,
	homeView,
	levelView,
	gameView
) {

	'use strict';


	var router = Backbone.Router.extend({

		routes: {

			'': 'routeDefault',
			'level/:operator': 'routeLevel',
			'game/:operator/:level': 'routeGame',
		},

		routeDefault: function () {

			app.getRegion('screen').show( new homeView() );
		},

		routeLevel: function (operator) {

			app.getRegion('screen').show(

				new levelView ({

                    'operator': operator
                })
            );
		},

		routeGame: function (operator, level) {

			app.getRegion('screen').show(

				new gameView ({

                    'operator': operator,
                    'level': level
                })
            );
		},
	});

	return new router();
});
