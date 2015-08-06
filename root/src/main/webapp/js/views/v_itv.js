define(function(require) {
	const Marionette = require('backbone.marionette');
	const tpl = require('../templates/t_itv_{%= UnderscoredName %}.hbs');
	return Marionette.ItemView.extend({
		initialize: function(options) {
			console.log('Item View initialized');
		},
		template: tpl,
		tagName: 'tr',
		className: 'v_itv_{%= UnderscoredName %}_item',
		modelEvents: {
			change: 'render'
		},
		events: {

		},
		
		templateHelpers: function(){
			return {
				{%= ConfigBool1 %}:this.config.{%= ConfigBool1 %},
				{%= ConfigBool2 %}:this.config.{%= ConfigBool2 %},
				{%= ConfigBool3 %}:this.config.{%= ConfigBool3 %},
				{%= ConfigBool4 %}:this.config.{%= ConfigBool4 %},
				{%= ConfigString1 %}:this.config.{%= ConfigString1 %},
				{%= ConfigString2 %}:this.config.{%= ConfigString2 %},
				{%= ConfigString3 %}:this.config.{%= ConfigString3 %},
				{%= ConfigString4 %}:this.config.{%= ConfigString4 %}
			}; 
		}
	});
});
