(function() {
	'use strict';

	function ConfirmationActionDialog(btfModal) {
		return btfModal({
			controller: 'ConfirmationAction',
			controllerAs: 'vmConfirmationAction',
			templateUrl: 'views/ConfirmActionDialog.tpl.html'
		});
	}

	ConfirmationActionDialog.$inject = ['btfModal'];

	angular.module('contactListApp')
		.factory('ConfirmationActionDialog', ConfirmationActionDialog);
})();