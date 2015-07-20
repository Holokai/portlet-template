
exports.notes = 	'This will generate a basic portlet structure in the current directory.\n\n'+
					'You will need to either move the PortletName_model.js file to the \n'+
					'-common folder, or delete it if it is not needed.\n\n'+
					'If there are more config variables than you need, simply hit enter to get\n'+
					'through them. You will need to remove any excess config vars from your \n'+
					'files.\n';


exports.template = function(grunt, init, done){
	init.process({type:''},[
			init.prompt('PortletName',init.defaults.ProductName+'-{**Just This Part**}-portlet'),
			init.prompt('ModelName'),
			init.prompt('ModelUrl','/delegate/'+init.defaults.BaseReference+'-api/api/'+init.defaults.ProductLine+'/{**Just This Part**}'),
			init.prompt('ConfigBool1','ConfigBool1'),
			init.prompt('ConfigBool1DefaultValue','true'),
			init.prompt('ConfigBool2','ConfigBool2'),
			init.prompt('ConfigBool2DefaultValue','true'),
			init.prompt('ConfigBool3','ConfigBool3'),
			init.prompt('ConfigBool3DefaultValue','true'),
			init.prompt('ConfigBool4','ConfigBool4'),
			init.prompt('ConfigBool4DefaultValue','true'),

			init.prompt('ConfigString1','ConfigString1'),
			init.prompt('ConfigString1DefaultValue','ConfigString1DefaultValue'),
			init.prompt('ConfigString2','ConfigString2'),
			init.prompt('ConfigString2DefaultValue','ConfigString2DefaultValue'),
			init.prompt('ConfigString3','ConfigString3'),
			init.prompt('ConfigString3DefaultValue','ConfigString3DefaultValue'),
			init.prompt('ConfigString4','ConfigString4'),
			init.prompt('ConfigString4DefaultValue','ConfigString4DefaultValue')
		],function(err,props){
			for (var attrname in init.defaults) { 
				props[attrname] = init.defaults[attrname]; 
			}
			console.log(props);
			var splitted = props.PortletName.split(/(?=[A-Z])/);
			//parse name: split on capitol letters, insert underscores
			props.UnderscoredName = splitted.join('_').toLowerCase();
			//parse name: split on capitol letters, insert hyphens
			props.Hyphenated = splitted.join('-').toLowerCase();
			//parse name: split on caps, insert spaces
			props.DisplaName = splitted.join(' ');
			var files = init.filesToCopy(props);
			init.copyAndProcess(files,props);
			done();
		});
};