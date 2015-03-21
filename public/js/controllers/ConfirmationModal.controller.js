(function() {
	'use strict';

	function ConfirmationModal($scope, $rootScope, ConfirmationDialog, ContactService) {
		var _self = this,
			promise;

		_self.close = ConfirmationDialog.deactivate;

		_self.delete = function () {
			promise = ContactService.deleteContact($scope.contact);

			promise.then(function() {
				$rootScope.$broadcast('deleteContact', $scope.contact);
				_self.close();
			});
		};
	}

	ConfirmationModal.$inject = ['$scope', '$rootScope', 'ConfirmationDialog', 'ContactService'];

	angular.module('contactListApp')
		.controller('ConfirmationModal', ConfirmationModal);
})();