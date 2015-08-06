define(function(require) {
	const Marionette = require('backbone.marionette');
	const paymentCollection = require('civicsCollections/{%= ModelName %}_collection');
	const paymentModel = require('civicsModels/{%= ModelName %}_model');
	const tpl = require('../templates/t_cpv_{%= UnderscoredName %}.hbs');
	const itemView = require('./v_itv_{%= UnderscoredName %}');
	return Marionette.CompositeView.extend({
		initialize: function(options) {
			this.config = options.config;
		},
		template: tpl,
		tagName: 'table',
		childView: itemView,
		childContainer: 'tbody',
		className: 'v_cpv_{%= UnderscoredName %}',
		modelEvents: {
			change: 'render'
		},
		collectionEvents: {
			change: 'render'
		},
		events: {
			
		},
		fetchCollection: function() {
			this.collection.set({
				//Set Something!
			});
			this.collection.fetch( {
				success:function(){console.log("{%= PortletName %} fetch success")},
				error:function(){console.log("{%= PortletName %} fetch failure")}
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
