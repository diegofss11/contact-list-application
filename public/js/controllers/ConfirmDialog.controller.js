(function() {
	'use strict';

	function ConfirmDialogController ($modalInstance, items) {
		var _self = this;

		_self.contactSelected = items;
		_self.ok = function () {
			$modalInstance.close(_self.contactSelected);
		};

		_self.cancel = function () {
			$modalInstance.dismiss('cancel');
		};
	}

	ConfirmDialogController.$inject = ['modalInstance', 'items'];

	angular.module('contactListApp')
		.controller('ConfirmDialogController', ConfirmDialogController);

})();