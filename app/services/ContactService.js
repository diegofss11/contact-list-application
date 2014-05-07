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
moduleApp.service('ContactService', function ($http, config) {
	
	this.findAll = function (cb) {
      	//var contacts = null;
      	$http.get(config.BASE_URL + '/contacts')
      	.success(function(data) {
      		cb(null, data);			
		})
		.error(function(data) {
			console.log('Error loading Contacts: ' + data);
			cb(data);
		});
    };	

	this.saveContact = function (newContact) {
        var contactObj = {
        	name: newContact.name,
        	address: newContact.address,
        	phone: newContact.phone
        }
        
       $http.post(config.BASE_URL + '/contacts', contactObj)
			.success(function(data, status, header) {
				debugger;
				alert("Saved");
			})
			.error(function(data) {
				console.log('Error: ' + data);
				alert("Saved failed");
			});        
	};

	this.updateContact = function (modifiedContact) {
		var contactUpdated = {
        	id: modifiedContact.id,
        	name: modifiedContact.name,
        	address: modifiedContact.address,
        	phone: modifiedContact.phone
        }
        var contact = this.findById(modifiedContact.id);
        contacts.splice( $.inArray(contact, contacts), 1 ); //removing existing contact

        contacts.push(contactUpdated); //update contact

        return ($.inArray(contactUpdated, contacts) != -1) //checking update
	};

	this.findById = function(id){
		var contact = null;
		$.each(contacts , function(index, value){
     		if(value.id == id){
     			return contact = value;
     		} 
		});
		return contact;
	}

	this.deleteContact = function (contact){
		$http.delete(config.BASE_URL + '/contacts/' + contact._id)
			.success(function(data) {
				alert("Removed")
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	}


	//MOCKS
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
    ];	
});