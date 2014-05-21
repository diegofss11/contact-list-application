exports.config = {
    specs:[
		'**/*.spec.js'
	],
	
	baseUrl: 'http://localhost:9000',  

	jasmineNodeOpts: {
        isVerbose: false,
        showColors: true,
        includeStackTrace: true,
    },   
     
    capabilities: {
        'browserName': 'chrome'
    },
    rootElement: 'body',

    allScriptsTimeout: 20000,
};