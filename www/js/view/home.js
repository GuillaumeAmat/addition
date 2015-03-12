

define([

	'jquery',
	'backbone',
	'marionette',
	'templates',
],
function (

	$,
	Backbone,
	Marionette
) {

	'use strict';

	return Marionette.LayoutView.extend({

		template: JST['home.html'],
		template_title: JST['title.html'],

		ui: {

			'title': '.title'
		},

		initialize: function () {

			this.radio = Backbone.Wreqr.radio.channel('global');
		},

		onRender: function () {

			this.radio.commands.execute('buttonBackHome:hide');

			this.ui.title.html(

				this.template_title({

					'text': document.webL10n.get('game_title')
				})
			);
		}
	});
});
