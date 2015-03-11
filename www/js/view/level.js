
define(['app', 'templates', 'jquery', 'backbone'], function (app, templates, $, Backbone) {

	'use strict';

	return Marionette.LayoutView.extend({

		template: JST['level.html'],

        template_button: JST['button_level.html'],
        
        templateHelpers: function() { 
            
            return { 'operator': this.options.operator };
            
            
        },

        
        onRender: function() { 

            for (var i = 1; i <= 5; i++)
            {
                var html = this.template_button({"button_level":"Niveau "+i});

                $("#button_level_"+i, this.$el).html(html);
            }
            
            
        },
        
	});
});
