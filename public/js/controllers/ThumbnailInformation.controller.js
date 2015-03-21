(function() {
	'use strict';

	function Thumbnail(ContactActionDialog, ConfirmationActionDialog) {
		var _self = this;

		_self.openConfirmationModal = ConfirmationActionDialog.activate;
		_self.openContactActionModal = ContactActionDialog.activate;
	}

	Thumbnail.$inject = ['ContactActionDialog', 'ConfirmationActionDialog'];

	angular.module('contactListApp')
		.controller('Thumbnail', Thumbnail);
})();