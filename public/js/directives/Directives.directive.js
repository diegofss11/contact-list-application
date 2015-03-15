'use strict';

angular.module('contactListApp')
	.directive('saveMessage', function(){
		return{
			scope:{
				action: '@' 
			},
			templateUrl: 'views/StatusMessage.tpl.html'
		};
	});