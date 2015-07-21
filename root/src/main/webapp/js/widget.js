define(function(require) {

	const _ = require('underscore');
	const Widget = require('{%= BaseReference %}Base/widget');
	const {%=ModelName %}Model = require('{%= BaseReference %}Models/{%= ModelName %}_model');
	const View = require('./views/view_{%= UnderscoredName %}');
	const widgetName = '{%= PortletName %}Widget';

	if(__DEV__) {	
		/* Set widget name to start widget in dev kit */
		window.widgetToStart = widgetName;
		const widgetConfig = {
			{%= ConfigBool1 %}:{%= ConfigBool1DefaultValue %},
			{%= ConfigBool2 %}:{%= ConfigBool2DefaultValue %},
			{%= ConfigBool3 %}:{%= ConfigBool3DefaultValue %},
			{%= ConfigBool4 %}:{%= ConfigBool4DefaultValue %},
			{%= ConfigString1 %}:'{%= ConfigString1DefaultValue %}',
			{%= ConfigString2 %}:'{%= ConfigString2DefaultValue %}',
			{%= ConfigString3 %}:'{%= ConfigString3DefaultValue %}',
			{%= ConfigString4 %}:'{%= ConfigString4DefaultValue %}'
		};
		window.widgetConfig = widgetConfig;
		console.log(widgetName+' config:', widgetConfig);
	}

	const parseConfigs = function(config) {
		return config;
	};

	const {%= PortletName %}Widget = Widget.extend({
		init: function(region, options) {
			if(__DEV__) {
				console.log('Started '+widgetName);
			}

			let config = _.extend({}, config, options);
			config = parseConfigs(config);

			const my{%=ModelName %}Model = new {%=ModelName %}Model();

			region.show(new View({
				model: my{%=ModelName %}Model,
				config: config
			}));

			if(__DEV__) {
				console.log('Loaded '+widgetName);
			}
		}
	});

	App.Widgets.{%= PortletName %}Widget = {%= PortletName %}Widget;

	return {%= PortletName %}Widget;
});
