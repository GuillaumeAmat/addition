
define(['app', 'templates', 'jquery', 'backbone'], function (app, templates, $, Backbone) {

	'use strict';

	return Marionette.LayoutView.extend({

		template: JST['level.html'],
        template_button: JST['button_level.html'],
		template_title: JST['title.html'],
        
        templateHelpers: function() { 
            
            return { 'operator': this.options.operator };
            
            
        },

 		ui: {

			'title': '.title'
		},

     
        onRender: function() { 

 			this.ui.title.html(

				this.template_title({

					'text': document.webL10n.get('difficulty_title')
				})
			);

           for (var i = 1; i <= 5; i++)
            {
                var html = this.template_button({"button_level":document.webL10n.get("level", {"num_level" : i})});

                $("#button_level_"+i, this.$el).html(html);
            }
            
            
        },
        
	});
});
