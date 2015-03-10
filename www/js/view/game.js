
define(
    [
        'app',
        'templates',
        'jquery',
        'backbone'
    ],
function (app, templates, $, Backbone)
{

    'use strict';


  
    return Marionette.LayoutView.extend
    ({

        template: JST['game.html'],
        
        templateHelpers: function()
        { 
          
            return {
                        'operator': this.options.operator,
                        'level': this.options.level,
                        'line_account': this._line_account
                    };
        },

        events:
        {
            "submit": "checkResult",
            "click @ui.numbers": "addNumber",
            "click @ui.nexts": "render",
            "click @ui.reset": "reset",
        },
        
        ui:
        {
            "numbers": ".number",
            "nexts": ".next",
            "total": "#userResult",
            "keyboard": "#keyboard",
            "reset": "#reset",
            "win": "#win",
            "lose": "#lose",
            "realResult": "#realResult",
        },


        
        
        onBeforeRender: function()
        {
            
            var level       = this.options.level;
            var chiffre1	= Math.round(Math.random() * Math.pow(10, level));
            var chiffre2	= Math.round(Math.random() * Math.pow(10, level));
 
            switch (this.options.operator)
            {
                case "1":
                        this._operator_type = "+";
                        this.total	= chiffre1 + chiffre2;
                    break;
                case "2":
                        this._operator_type = "-";
                        if (chiffre2 > chiffre1)
                        {
                            var temp = chiffre2;
                            chiffre2 = chiffre1;
                            chiffre1 = temp;
                        }
                        this.total	= chiffre1 - chiffre2;
                    break;
                case "3":
                        this._operator_type = "x";
                        this.total	= chiffre1 * chiffre2;
                    break;
                case "4":
                        this._operator_type = "/";
                        var chiffre1	= Math.round(Math.random() * (10*level));
                        var chiffre2	= Math.round(Math.random() * (10*level)) + 1;
                        chiffre1 = chiffre1 * chiffre2;
                        this.total = chiffre1 / chiffre2;
                    break;
            }
            
            

            
            this._line_account = chiffre1+" "+this._operator_type+" "+chiffre2+" = ";

        },

        onRender:function()
        {
            this.ui.keyboard.show();
            this.ui.win.hide();
            this.ui.lose.hide();
        },







        checkResult: function(e)
        {
            e.preventDefault();
            this.ui.keyboard.hide();

            if (this.ui.total.html() == this.total)
            {
                this.ui.win.show();
            }
            else
            {
                this.ui.realResult.text(this.total);
                this.ui.lose.show();
            }
            this.ui.nexts.focus();
        },


        reset: function(e)
        {
            this.ui.total.text('');            
        },

        addNumber: function(e)
        {
            this.ui.total.append($(e.target).data("value")); 
        },


	});
});
