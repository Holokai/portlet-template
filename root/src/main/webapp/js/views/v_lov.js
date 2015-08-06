define(function(require) {
	const Marionette = require('backbone.marionette');
	const $ = require('jquery');
	const tpl = require('../templates/t_lov_{%= UnderscoredName %}.hbs');
	const compositeView = require('./v_cpv_{%= UnderscoredName %}');
	

	return Marionette.LayoutView.extend({
		
		initialize: function(options) {
			this.config = options.config;
			
			
		},
		onShow:function(){
			var {%= PortletName %}View = new compositeView({
				config: this.config
			});
			this.{%= PortletName %}CompositeView.show({%= PortletName %}View);
		},
		template: tpl,
		regions: {
			{%= PortletName %}CompositeView: '.compositeView'

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
