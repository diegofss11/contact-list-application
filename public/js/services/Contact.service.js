(function() {
	'use strict';

	function ContactService($http, $q, config) {
		var _self = this,
			promise, deferred;

		_self.contacts = [];

		_self.findAll = function () {
			deferred = $q.defer();

			promise = $http.get(config.BASE_URL + '/contacts');

			return promise.then(function(result) {
				angular.copy(result.data, _self.contacts);
			}, function(error) {
				console.log('Error loading Contacts: ' + error);
			});
		};

		_self.saveContact = function (contact) {
			deferred = $q.defer();

			promise = $http.post(config.BASE_URL + '/contacts', contact);

			return promise.then(function(result) {
				angular.copy(result.data, _self.contacts);
			}, function(error) {
				console.log('Error saving Contact: ' + error);
			});
		};

		_self.updateContact = function (contact) {
			if (contact._id) {
				deferred = $q.defer();

				promise = $http.put(config.BASE_URL + '/contacts/' + contact._id, contact);

				return promise.then(function (result) {
					angular.copy(result.data, _self.contacts);
				}, function (error) {
					console.log('Error updating Contact: ' + error);
				});
			}
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

