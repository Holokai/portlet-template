
define(function(){
	var Backbone = require('backbone');

	return Backbone.Model.extend({
		urlRoot : '{%= BaseUrl %}{%= ModelUrl %}/',
		url:function(){
			var filter = this.get('filter');
			var filterUrl = '';
			//if a filter has been set, iterate through it and find the associated property/value pairs
			if(! _.isEmpty(filter)){
				filterUrl = '?Filter=['
				for(var i=0;i<filter.length;i++){
					filterUrl+='{property:'+filter[i].property+',value:'+filter[i].value+'},';
				}
				//filterUrl = filterUrl.substring(0,filterUrl.length-1)+']';
				filterUrl = filterUrl.substring(0,filterUrl.length-2);
			}
			return this.urlRoot+filterUrl;
		
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
		},
		parse:function(response){
			console.log('{%= ModelName %} model response',response);
			var retData = response;
			if(! _.isEmpty(response.data && response.responseStatus)){
				this.responseStatus = response.responseStatus;
				retData = response.data;
			}
			return retData;
		}
	});
});