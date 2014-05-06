'use strict';
var moduleApp = angular.module('contactListApp', ['ngRoute', 'ui.bootstrap']);

//configuring router
moduleApp.config( function ($routeProvider, $locationProvider) {
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