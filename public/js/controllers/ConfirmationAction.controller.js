(function() {
	'use strict';

	function ConfirmationAction($scope, $rootScope, ConfirmationActionDialog, ContactService) {
		var _self = this,
			promise;

		_self.close = ConfirmationActionDialog.deactivate;

		_self.delete = function () {
			promise = ContactService.deleteContact($scope.contact);

			promise.then(function() {
				$rootScope.$broadcast('deleteContact', $scope.contact);
				_self.close();
			});
		};
	}

	ConfirmationAction.$inject = ['$scope', '$rootScope', 'ConfirmationActionDialog', 'ContactService'];

	angular.module('contactListApp')
		.controller('ConfirmationAction', ConfirmationAction);
})();