module.exports = function( grunt ) { 
	grunt.initConfig({
	  	pkg: grunt.file.readJSON('package.json'),

		karma: {
	        unit: {
	            configFile: 'config/karma.config.js'
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
		    build: {
				options: {
					sassDir: 'public/styles',
					cssDir: 'public/dist/css'
				}
		    }
  		},
		jshint: {
			all: {
				options: {
					jshintrc: '.jshintrc'
				},
				src: [
					'public/js/**/*.js',
					'test/**/*.spec.js',
					'!node_modules/**/*.js'
				]
			}
		},
		open: {
			build: {
				path: 'http://localhost:3030',
				app: 'Google Chrome'
			}
		},
		clean: ['public//dist'],
		injector: {
			options: {
				ignorePath: 'public/'
			},
			app: {
				files: {
					'public/index.html' : [
						//JS
						'public/vendor/angular/angular.min.js',
						'public/vendor/angular-bootstrap/ui-bootstrap.js',
						'public/vendor/angular-bootstrap/ui-bootstrap-tpls.js',
						'public/vendor/angular-route/angular-route.js',
						'public/dist/js/templates_cache.js',
						'public/vendor/angular-modal/modal.js',
						'public/vendor/angular-animate/angular-animate.js',

						//APP FILES
						'public/js/app.js',
						'public/js/controllers/*.controller.js',
						'public/js/modals/*.modal.js',
						'public/js/directives/*.directive.js',
						'public/js/services/*.service.js',

						//CSS
						'public/dist/css/main.css',
						'public/vendor/angular-modal/modal.css'
					]
				}
			}
		},
		html2js: {
			options: {
				quoteChar: '\'',
				module: 'contactListApp.tpls',
				base: 'public',
				indentString: '	',
				singleModule: true,
				useStrict: true,
				htmlmin: {
					collapseBooleanAttributes: true,
					collapseWhitespace: true,
					removeAttributeQuotes: true,
					removeComments: true,
					removeEmptyAttributes: true,
					removeRedundantAttributes: true,
					removeScriptTypeAttributes: true,
					removeStyleLinkTypeAttributes: true
				}
			},
			main: {
				src: ['public/views/*.tpl.html'],
				dest: 'public/dist/js/templates_cache.js'
			}
		},
		watch: {
			html: {
				files: ['public/index.html', 'public/views/*.tpl.html'],
				task: ['default'],
				options: {
					livereload: true
				}
			},
			js: {
				files: 'public/js/**/*.js',
				tasks: ['jshint'],
				options: {
					spawn: true,
					reload: true
				}
			},
			sass: {
				files: ['public/dist/css/*.scss'],
				tasks: ['compass']
			},
			livereload: {
				files: ['public/dist/css/main.css'],
				options: {
					livereload: true,
					livereloadOnError: false
				}
			}
		}
  	});

  	//** LOAD TASKS  
	grunt.loadNpmTasks('grunt-protractor-runner');
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-contrib-compass'); //compile SASS to CSS - must install compass through gem - gem install compass
	grunt.loadNpmTasks('grunt-contrib-jshint'); //keep JavaScript code consistent
	grunt.loadNpmTasks('grunt-contrib-clean'); //cleans files and folders
	grunt.loadNpmTasks('grunt-open'); //opens urls and files from a grunt task
	grunt.loadNpmTasks('grunt-injector'); //injects css and js in a file
	grunt.loadNpmTasks('grunt-html2js'); //converts AngularJS templates to JavaScript
	grunt.loadNpmTasks('grunt-contrib-watch'); //run predefined tasks whenever watched file patterns are added, changed or deleted.

	//** REGISTER TASKS
	  
	//DEFAULT
	grunt.registerTask('default', ['clean', 'html2js', 'compass', 'injector', 'watch']);

	//GRUNT TEST-KARMA
	grunt.registerTask('test', ['html2js', 'karma']);
	
	//GRUNT TEST-PROTRACTOR
	grunt.registerTask('test-ui', ['protractor']);
	
	//GRUNT SASS
	grunt.registerTask('sass', ['compass:dev']);
};

