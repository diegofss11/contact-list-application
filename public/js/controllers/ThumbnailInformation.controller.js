(function() {
	'use strict';

	function Thumbnail(ConfirmationActionDialog) {
		var _self = this;

		_self.openConfirmationModal = ConfirmationActionDialog.activate;

		_self.showDetail = function(contact) {

		};
	}

	Thumbnail.$inject = ['ConfirmationActionDialog'];

	angular.module('contactListApp')
		.controller('Thumbnail', Thumbnail);
})();