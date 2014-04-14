moduleApp.controller('NotifyModalController', function($scope, $modalInstance, items){
	$scope.action = items;
	$scope.ok = function () {
    	$modalInstance.close();
  	};  		
});