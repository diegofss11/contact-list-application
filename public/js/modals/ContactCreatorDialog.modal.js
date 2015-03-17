(function() {
	'use strict';

	function ContactCreatorDialog(btfModal) {
		return btfModal({
			controller: 'ContactModal',
			controllerAs: 'vmContactModal',
			templateUrl: 'views/FormContact.tpl.html'
		});
	}

	ContactCreatorDialog.$inject = ['btfModal'];

	angular.module('contactListApp')
		.factory('ContactCreatorDialog', ContactCreatorDialog);
})();