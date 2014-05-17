exports.config = {

	specs:[
		'**/*.spec.js'
	],
	
	baseUrl: 'http://localhost:9000',  
    //seleniumAddress: 'http://localhost:4444/wd/hub',
	jasmineNodeOpts: {
        isVerbose: false,
        showColors: true,
        includeStackTrace: true
    },    
    capabilities: {
        'browserName': 'chrome'
    },
    rootElement: 'body',
};