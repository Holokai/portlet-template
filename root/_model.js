
define(function(){
	var Backbone = require('backbone');

	return Backbone.Model.extend({
		urlRoot : '{%= BaseUrl %}{%= ModelUrl %}',
		url:function(){
			return this.urlRoot;
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