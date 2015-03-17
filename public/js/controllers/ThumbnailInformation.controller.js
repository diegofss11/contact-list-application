(function() {
	'use strict';

	function Thumbnail(ConfirmationDialog) {
		var _self = this;

		_self.openConfirmationModal = ConfirmationDialog.activate;

		_self.showDetail = function(contact) {

		};
	}

	Thumbnail.$inject = ['ConfirmationDialog'];

	angular.module('contactListApp')
		.controller('Thumbnail', Thumbnail);

})();