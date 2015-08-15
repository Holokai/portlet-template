
define(function(){
	const Backbone = require('backbone');
	const IPS = require('../base/ipsModelCollection')
    const builder = require('civicsUtils/buildUrlParameters');

	return IPS.extend({
		urlRoot : '{%= BaseUrl %}{%= ModelUrl %}/',
		url:function(){
			var parameters = ''
			if(this.urlParms!=undefined){
				builder.buildUrlParameters(this.urlParms)
			}
			return this.urlRoot+parameters;
		},
		//attrs contains key/value of model data
		//key: model attribute name
		//value: model attribute value
		validate:function(attrs,options){
			//errors object to hold error messages.
			//key: portion of jQuery selector for invalid field
			//value:Error Message
			var errors = {};
			//do Validations
			if(! _.isEmpty(errors)){
				return errors;
			}
		}
	});
});