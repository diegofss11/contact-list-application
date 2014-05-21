module.exports = function( grunt ) { 
	grunt.initConfig({
	  	pkg: grunt.file.readJSON('package.json'),
		connect: {
			server:{
				options: {
					port: 9000,
					// Change this to '0.0.0.0' to access the server from outside.
					hostname: 'localhost',
					keepalive: true
				}
			}
		},
		karma: {
	        unit: {
	            configFile: 'test/karma.config.js',
	            runnerPort: 9876,
	            browsers: [ 'Chrome' ]
	        }
	    },
	    protractor: {
      		options: {
        		keepAlive: true,
        		noColor: false,
        		configFile: 'test/e2e/protractor.conf.js'
      		},
      		dev: {
        		options: {
          			args: {
            			chromeOnly: true
          			}
        		}
      		}
    	},
    	compass: {
		    dev: {
		      options: {
		        sassDir: 'contents/sass',
		        cssDir: 'contents/css/'
		      }
		    }
  		},
  		jshint: {
  			allFiles: [
        		'Gruntfile.js',
        		'app/**/*.js',
        		'test/**/*.js',
      		],
      		options: {
        		jshintrc: '.jshintrc'
      		}      	
    	}	    
  	});

  	//** LOAD TASKS  
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-protractor-runner');
	grunt.loadNpmTasks('grunt-karma');	
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	//** REGISTER TASKS
	  
	//DEFAULT
	grunt.registerTask('default',['connect:server']);

	//GRUNT TEST-KARMA
	grunt.registerTask('test-karma',['karma']);
	
	//GRUNT TEST-PROTRACTOR
	grunt.registerTask('test-protractor',['protractor']);
	
	//GRUNT SASS
	grunt.registerTask('sass',['compass:dev']);
};

