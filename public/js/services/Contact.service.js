(function() {
	'use strict';

	function ContactService($http, $q, config) {
		var _self = this,
			promise, deferred;

		_self.contacts = [];

		_self.findAll = function () {
			deferred = $q.defer();

			promise = $http.get(config.BASE_URL + '/contacts');

			return promise.then(function (result) {
				angular.copy(result.data, _self.contacts);
			}, function(error) {
				console.log('Error loading Contacts: ' + data);
			});
		};

		_self.saveContact = function (contact) {
			if (contact._id === undefined) {
				deferred = $q.defer();

				promise = $http.post(config.BASE_URL + '/contacts', contact);

				promise.success(function (data) {
					data.action = 'saved';
					deferred.resolve(data);
				})
				.error(function (data) {
					console.log('Error saving Contact: ' + data);
					deferred.reject(data);
				});

				_self.findAll();

				return deferred.promise;
			}
			else {
				return this.updateContact(contact);
			}
		};

		_self.updateContact = function (contact) {
			deferred = $q.defer();

			promise = $http.put(config.BASE_URL + '/contacts/' + contact._id, contact);

			promise.success(function (data) {
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

			promise = $http.delete(config.BASE_URL + '/contacts/' + contact._id);

			return promise.then(function (result) {
				angular.copy(result.data, _self.contacts);
			}, function(error) {
				console.log('Error deleting contacts: ' + error);
			});
		};
	}

	ContactService.$inject = ['$http', '$q', 'config'];

	angular.module('contactListApp')
		.service('ContactService', ContactService);
})();

