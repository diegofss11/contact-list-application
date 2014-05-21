'use strict';
angular.module('contactListApp')
	.controller('ConfirmDialogController', function($scope,$modalInstance, items){
		$scope.contactSelected = items;
	  	$scope.ok = function () {
	    	$modalInstance.close($scope.contactSelected);
	  	};
		
		$scope.cancel = function () {
	    	$modalInstance.dismiss('cancel');
	 	};
});