(function() {
	'use strict';

	function ContactService($http, $q, config) {
		var _self = this,
			deferred;

		_self.findAll = function () {
			deferred = $q.defer();

			$http.get(config.BASE_URL + '/contacts')
				.success(function (data) {
					deferred.resolve(data);
				})
				.error(function (data) {
					console.log('Error loading Contacts: ' + data);
					deferred.reject(data);
				});

			return deferred.promise;
		};

		_self.saveContact = function (contact) {
			if (contact._id === undefined) {
				deferred = $q.defer();

				$http.post(config.BASE_URL + '/contacts', contact)
					.success(function (data) {
						data.action = 'saved';
						deferred.resolve(data);
					})
					.error(function (data) {
						console.log('Error saving Contact: ' + data);
						deferred.reject(data);
					});
				return deferred.promise;
			}
			else {
				return this.updateContact(contact);
			}
		};

		_self.updateContact = function (contact) {
			deferred = $q.defer();

			$http.put(config.BASE_URL + '/contacts/' + contact._id, contact)
				.success(function (data) {
					data.action = 'updated';
					deferred.resolve(data);
				})
				.error(function (data) {
					console.log('Error updating Contact: ' + data);
					deferred.reject(data);
				});
			return deferred.promise;
		};

		_self.deleteContact = function (contact) {
			deferred = $q.defer();

			$http.delete(config.BASE_URL + '/contacts/' + contact._id)
				.success(function (data) {
					data.action = 'deleted';
					deferred.resolve(data);
				})
				.error(function (data) {
					console.log('Error deleting Contact: ' + data);
					deferred.reject(data);
				});

			return deferred.promise;
		};
	}

	ContactService.$inject = ['$http', '$q', 'config'];

	angular.module('contactListApp')
		.service('ContactService', ContactService);
})();

