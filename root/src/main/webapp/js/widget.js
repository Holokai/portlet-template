define(function(require) {

	const _ = require('underscore');
	const Widget = require('{%= BaseReference %}Base/widget');
	const LayoutView = require('./views/v_lov_{%= UnderscoredName %}');
	const CompositeView = require('./views/v_cpv_{%= UnderscoredName %}');
	const ItemView = require('./views/v_itv_{%= UnderscoredName %}');
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
		//console.log(widgetName+' config:', widgetConfig);
	}

	const parseConfigs = function(config) {
		return config;
	};

	const {%= PortletName %}Widget = Widget.extend({
		init: function(region, options) {
			if(__DEV__) {
				//console.log('Started '+widgetName);
			}

			let config = _.extend({}, config, options);
			config = parseConfigs(config);

			region.show(new LayoutView({
				config: config
			}));
			// region.show(new CompositeView({
			// 	config: config
			// }));
			// region.show(new ItemView({
			// 	config: config
			// }));

			if(__DEV__) {
				//console.log('Loaded '+widgetName);
			}
		}
	});

	App.Widgets.{%= PortletName %}Widget = {%= PortletName %}Widget;

	return {%= PortletName %}Widget;
});
