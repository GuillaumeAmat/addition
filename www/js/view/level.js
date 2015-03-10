
define(['app', 'templates', 'jquery', 'backbone'], function (app, templates, $, Backbone) {

	'use strict';

	return Marionette.LayoutView.extend({

		template: JST['level.html'],
        
        templateHelpers: function() { 
            
            return { 'operator': this.options.operator };
            
            
        },
        
	});
});
