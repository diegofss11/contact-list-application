'use strict';

angular.module('contactListApp')
	.directive('navBar', function(){
		return {
			restrict: 'E',
			templateUrl: '/app/views/NavBar.html'
		};
	});