

define([

	'app',
	'backbone',
	'view/home'
],
function (

	app,
	Backbone,
	homeView
) {

	'use strict';


	var router = Backbone.Router.extend({

		routes: {

			'': 'routeDefault',
		},

		routeDefault: function () {

			if ( !this._home_view ) {

				this._home_view = new homeView();
			}

			app.getRegion('screen').show( this._home_view );
		},
	});

	return new router();
});
