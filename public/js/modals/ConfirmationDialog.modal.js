(function() {
	'use strict';

	function ConfirmationDialog(btfModal) {
		return btfModal({
			controller: 'ConfirmationModal',
			controllerAs: 'vmConfirmationModal',
			templateUrl: 'views/ConfirmDialog.tpl.html'
		});
	}

	ConfirmationDialog.$inject = ['btfModal'];

	angular.module('contactListApp')
		.factory('ConfirmationDialog', ConfirmationDialog);
})();