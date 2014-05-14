/*.factory('Todos', function($http) {
		return {
			get : function() {
				return $http.get('/api/todos');
			},
			create : function(todoData) {
				return $http.post('/api/todos', todoData);
			},
			delete : function(id) {
				return $http.delete('/api/todos/' + id);
			}
		}
	});*/

'use strict';
moduleApp.service('ContactService', function ($http, $q, config) {
	
	this.findAll = function () {
      	var deferred = $q.defer(); //deferred represents a task that will be done in the future
      	
		$http.get(config.BASE_URL + '/contacts')
      		.success(function(data, status) {
      			deferred.resolve(data);			
			})
			.error(function(data) {
				console.log('Error loading Contacts: ' + data);
				deferred.reject(data);
			});
      	return deferred.promise;
    };	

	this.saveContact = function (contact) {
        if(contact._id == undefined){
			var deferred = $q.defer();
	        
	       $http.post(config.BASE_URL + '/contacts', contact)
				.success(function(data, status, header) {
					data.action = "saved";
					deferred.resolve(data);
				})
				.error(function(data) {
					console.log('Error saving Contact: ' + data);
					deferred.reject(data);
				}); 
				return deferred.promise;       
		}
		else{
			return this.updateContact(contact);
		}
	};

	this.updateContact = function (contact) {
		var deferred = $q.defer();

        	$http.put(config.BASE_URL + '/contacts/' + contact._id, contact)
				.success(function(data, status, header) {
					data.action = "updated";
					deferred.resolve(data);
				})
				.error(function(data) {
					console.log('Error updating Contact: ' + data);
					deferred.reject(data);
				}); 
				return deferred.promise;       
	};   
	
	this.deleteContact = function (contact){
		var deferred = $q.defer();
			$http.delete(config.BASE_URL + '/contacts/' + contact._id)
				.success(function(data, status, header) {
					data.action = "deleted";
					deferred.resolve(data);										
				})
				.error(function(data) {
					console.log('Error deleting Contact: ' + data);
					deferred.reject(data);
				}); 
				return deferred.promise;
	}
	/*
	//MOCKS EXAMPLE
	var contacts = [
		{
			id: 1, name: 'Diego Souza1', address: 'Market Street 500', phone: 1234567
		},
		{
			id: 2, name: 'Diego Souza2', address: 'Market Street 500', phone: 1234568
		},
		{
			id: 3, name: 'Diego Souza3', address: 'Market Street 500', phone: 1234569
		},
		{
			id: 4, name: 'Diego Souza4', address: 'Market Street 500', phone: 12345610
		},
		{
			id: 5, name: 'Diego Souza5', address: 'Market Street 500', phone: 12345611
		},
		{
			id: 6, name: 'Diego Souza6', address: 'Market Street 500', phone: 12345612
		},
		{
			id: 7, name: 'Diego Souza7', address: 'Market Street 500', phone: 12345613
		},
		{
			id: 8, name: 'Diego Souza8', address: 'Market Street 500', phone: 12345614
		},
		{
			id: 9, name: 'Diego Souza9', address: 'Market Street 500', phone: 12345615
		},
		{
			id: 10, name: 'Diego Souza10', address: 'Market Street 500', phone: 12345616
		}        
    ]; */
});
