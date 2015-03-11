
define(['app', 'templates', 'jquery', 'backbone'], function (app, templates, $, Backbone) {

	'use strict';

	return Marionette.LayoutView.extend({

		template: JST['home.html'],
		template_title: JST['title.html'],

		ui: {

			'title': '.title'
		},

		onRender: function () {

			app.radio.command('buttonBackHome:hide');

			this.ui.title.html(

				this.template_title({

					'text': document.webL10n.get('game_title')
				})
			);
		}
	});
});
