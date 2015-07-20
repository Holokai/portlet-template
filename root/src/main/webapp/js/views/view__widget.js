define(function(require) {
	const Marionette = require('backbone.marionette');
	const tpl = require('../templates/tpl_{%= UnderscoredName %}.hbs');
	return Marionette.ItemView.extend({
		initialize: function(options) {
			this.config = options.config;
			this.fetchModel();
		},
		template: tpl,
		className: 'view_{%= UnderscoredName %}_widget_container',
		modelEvents: { 
		change: 'render'
		},
		fetchModel: function() {
			this.model.set({
				//Set Something!
			});
			this.model.fetch( {
				success:function(){console.log("{%= PortletName %} fetch success")},
				failure:function(){console.log("{%= PortletName %} fetch failure")}
			});
		},
		templateHelpers: function() {
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