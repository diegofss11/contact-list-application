'use strict';
angular.module('contactListApp', ['ngRoute', 'ui.bootstrap']);

angular.module('contactListApp')
    .value('config', {
        BASE_URL: 'http://localhost:3000'
    });

//configuring router
angular.module('contactListApp')
    .config( function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider.
          when('/', {
            controller: 'ContactController',
            templateUrl: '/app/views/MainView.html'
          }).      
          otherwise({
            redirectTo: '/'
          });
      }
    );