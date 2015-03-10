

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

			if ( !this._home_view ) {

				this._home_view = new homeView();
			}

			app.getRegion('screen').show( this._home_view );
		},
        
		routeLevel: function (operator) {
			app.getRegion('screen').show( new levelView
                                                ({
                                                    'operator': operator
                                                })
                                        );
		},
        
		routeGame: function (operator, level) {

			app.getRegion('screen').show( new gameView
                                                ({
                                                    'operator': operator,
                                                    'level': level
                                                })
                                        );
		},
	});

	return new router();
});
