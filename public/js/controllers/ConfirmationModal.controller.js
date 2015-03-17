(function() {
	'use strict';

	function ConfirmationModal(ConfirmationDialog, ContactService) {
		var _self = this;

		_self.close = ConfirmationDialog.deactivate;

		_self.delete = function () {
			debugger;
			ContactService.delete();
		};
	}

	ConfirmationModal.$inject = ['ConfirmationDialog', 'ContactService'];

	angular.module('contactListApp')
		.controller('ConfirmationModal', ConfirmationModal);

})();