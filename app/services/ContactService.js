moduleApp.service('ContactService', function () {
	this.findAll = function () {
      	return contacts;
	};	

	this.saveContact = function (newContact) {
        var previousSize = contacts.length,
        	contactObj = {
        		id: previousSize + 1,
        		name: newContact.name,
        		address: newContact.address,
        		phone: newContact.phone
        	}
        
        contacts.push(contactObj);

        if(contacts.length > previousSize){
        	//saved successfully
        	return true;
        }
        else{
        	false;
        }
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
		contacts.splice( $.inArray(contact, contacts), 1 );
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