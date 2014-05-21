'use strict';

angular.module('contactListApp')
	.directive('navBar', function(){
		return {
			restrict: 'E',
			templateUrl: '/app/views/NavBar.html'
		};
	});

angular.module('contactListApp')
	.directive('saveMessage', function(){
		return{
			scope:{
				action: '@' 
			},
			templateUrl: '/app/views/StatusMessage.html'  
		};
	});