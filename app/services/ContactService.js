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
					data.action = "saved";
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

        	$http.put(config.BASE_URL + '/contacts' + contact._id)
				.success(function(data, status, header) {
					data.action = "updated";
					deferred.resolve(data);
				})
				.error(function(data) {
					console.log('Error updating Contact: ' + data);
					data.action = "updated";
					deferred.reject(data);
				}); 
				return deferred.promise;       
	};   
	
	this.deleteContact = function (contact){
		$http.delete(config.BASE_URL + '/contacts/' + contact._id)
			.success(function(data) {
				alert("Removed")
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	}	
});