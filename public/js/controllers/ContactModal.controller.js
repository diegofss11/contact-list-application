(function() {
	'use strict';

	function ContactModal($rootScope, ContactCreatorDialog, ContactService) {
		var _self = this,
			promise;

		_self.close = ContactCreatorDialog.deactivate;

		_self.isEditable = function (isReadOnly) {
			_self.isReadOnly = !isReadOnly;
		};

		_self.cancelAction = function (isReadOnly) {
			if (_self.mode === 'add') {
				//if is add Contact - cancel will exit
				$modalInstance.dismiss('cancel');
			}
			else {
				//go back to readyOnly mode
				_self.contact = {
					_id: items._id,
					name: items.name,
					phone: items.phone,
					address: items.address
				};
				_self.isEditable(isReadOnly);
			}
		};

		_self.saveContact = function () {
			promise = ContactService.saveContact(_self.newContact);

			promise.then(function(result) {
				ContactService.findAll();

				_self.close().then(function(){
					$rootScope.$broadcast('saveContact', _self.newContact);
				});
			});
		};
	}

	ContactModal.$inject = ['$rootScope', 'ContactCreatorDialog', 'ContactService'];

	angular.module('contactListApp')
		.controller('ContactModal', ContactModal);

})();
