(function() {
	'use strict';

	function ContactActionDialog(btfModal) {
		return btfModal({
			controller: 'ContactModal',
			controllerAs: 'vmContactModal',
			templateUrl: 'views/ContactActionDialog.tpl.html'
		});
	}

	ContactActionDialog.$inject = ['btfModal'];

	angular.module('contactListApp')
		.factory('ContactActionDialog', ContactActionDialog);
})();