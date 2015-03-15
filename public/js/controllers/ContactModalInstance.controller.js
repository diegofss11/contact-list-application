(function() {
	'use strict';

	function ContactModalInstanceController () {
		var _self = this;

		//if (items === undefined) {
		//	_self.mode = 'add';
		//	_self.isReadOnly = false;
		//	_self.modalTitle = 'Add Contact';
		//	_self.buttonText = 'Save';
		//	_self.contact = {};
		//}
		//else {
		//	_self.contact = {
		//		_id: items._id,
		//		name: items.name,
		//		phone: items.phone,
		//		address: items.address
		//	};
		//	_self.mode = 'update';
		//	_self.isReadOnly = true;
		//	_self.modalTitle = 'Contact Details';
		//	_self.buttonText = 'Update';
		//}

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

		_self.saveContact = function (isFormValid) {
			_self.submitted = true;
			if (isFormValid) {
				$modalInstance.close(_self.contact);
			}
		};

		_self.close = function () {
			$modalInstance.dismiss('cancel');
		};
	}

	//ContactModalInstanceController.$inject = ['$modalInstance', 'items'];

	angular.module('contactListApp')
		.controller('ContactModalInstanceController', ContactModalInstanceController);

})();
