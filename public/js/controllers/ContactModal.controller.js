(function() {
	'use strict';

	function ContactModal($scope, $rootScope, ContactActionDialog, ContactService) {
		var _self = this,
			promise;

		_self.close = ContactActionDialog.deactivate;
		_self.isDisabled = true;

		_self.cancel = function() {
			if(_self.isDisabled) {
				_self.close();
			} else {
				_self.isDisabled = true;
			}
		};

		_self.saveContact = function () {
			promise = ContactService.saveContact(_self.newContact);

			promise.then(function(result) {
				_self.close().then(function(){
					$rootScope.$broadcast('saveContact', _self.newContact);
				});
			});
		};

		_self.updateContact = function () {
			promise = ContactService.updateContact($scope.updatedContact);

			promise.then(function(result) {
				_self.close().then(function(){
					$rootScope.$broadcast('updateContact', $scope.updatedContact);
				});
			});
		};
	}

	ContactModal.$inject = ['$scope', '$rootScope', 'ContactActionDialog', 'ContactService'];

	angular.module('contactListApp')
		.controller('ContactModal', ContactModal);
})();
