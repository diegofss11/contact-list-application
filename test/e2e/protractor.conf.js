exports.config = {

	specs:[
		'../**/*.spec.js'
	],
	
	baseUrl: 'http://localhost:9000',

	jasmineNodeOpts: {
        isVerbose: false,
        showColors: true,
        includeStackTrace: true
    },
    chromeDriver: 'node_modules/grunt-protractor-runner/node_modules/protractor/selenium/chromedriver',
    capabilities: {
        'browserName': 'chrome'
    },
    rootElement: 'body',
};