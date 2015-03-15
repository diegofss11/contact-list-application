'use strict';
angular.module('contactListApp', ['contactListApp.tpls', 'ui.bootstrap', 'ngRoute', 'btford.modal']);

angular.module('contactListApp')
    .value('config', {
        BASE_URL: 'http://localhost:3030'
    });

//configuring router
angular.module('contactListApp')
    .config(function ($routeProvider) {
        $routeProvider.
            when('/', {
                controller: 'DashboardController',
                controllerAs: 'vmDashboard',
                templateUrl: 'views/Dashboard.tpl.html'
            }).
            otherwise({
                redirectTo: '/'
            });
        }
    );