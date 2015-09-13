// Karma configuration
// Generated on Mon Apr 14 2014 01:15:12 GMT-0300

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
    	//LIBARY FILES
        'public/vendor/angular/angular.min.js',
        'public/vendor/angular-bootstrap/ui-bootstrap.min.js',
        'public/vendor/angular-mocks/angular-mocks.js',
        'public/vendor/angular-route/angular-route.min.js',
        'public/vendor/angular-animate/angular-animate.min.js',
        'public/dist/js/templates_cache.js',
        'public/vendor/angular-modal/modal.min.js',

        //APP FILES
        'public/js/app.js',
        'public/js/controllers/*.controller.js',
        'public/js/modals/*.modal.js',
        'public/js/directives/*.directive.js',
        'public/js/services/*.service.js',
        'test/mocks/contactsMock.js',

        //TEST FILES
        'test/spec/**/*.spec.js'
    ],


      // list of files to exclude
      exclude: [
      ],


      // preprocess matching files before serving them to the browser
      // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
      preprocessors: {
      },


      // test results reporter to use
      // possible values: 'dots', 'progress'
      // available reporters: https://npmjs.org/browse/keyword/karma-reporter
      reporters: ['progress'],


      // web server port
      port: 9876,


      // enable / disable colors in the output (reporters and logs)
      colors: true,


      // level of logging
      // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
      logLevel: config.LOG_INFO,


      // enable / disable watching file and executing tests whenever any file changes
      autoWatch: true,


      // start these browsers
      // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
      browsers: ['PhantomJS'],


      // Continuous Integration mode
      // if true, Karma captures browsers, runs the tests and exits
      singleRun: true
  });
};