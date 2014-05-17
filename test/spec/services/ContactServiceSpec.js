describe('ContactService - Testing CRUD Operations', function(){    
    var ContactServiceMock,
        httpBackend,
        CONTACTS_MOCK,        
        BASE_URL;
         
    beforeEach(module('contactListApp', 'itemsMock'));    
	
    // Initialize the controller and a mock scope
  	beforeEach( inject(function (_ContactService_, _CONTACTS_MOCK_, _$httpBackend_, _BASE_URL_) {
    	httpBackend = _$httpBackend_;
        ContactServiceMock = _ContactService_;
        CONTACTS_MOCK = _CONTACTS_MOCK_;
        BASE_URL = _BASE_URL_;
    }));

    // make sure no expectations were missed in your tests.
    afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

	it('should FIND all contacts', function(){
        var result, 
            returnedPromise;

        httpBackend.whenGET(BASE_URL + '/contacts').respond(CONTACTS_MOCK);
        
        //making the call
        returnedPromise  = ContactServiceMock.findAll();

        returnedPromise.then(function (contacts){
            result = contacts;
        });

        //flushes any request then allow then() call to be executed when the promise is resolved in the success()
        httpBackend.flush(); 
        expect(result.length).toEqual(3);       
    });  

    it('should DELETE a contact', function(){
        var returnedPromise,
            result,
            contactToDelete = {
                _id: 3,
                name: 'John Lima',
                address: 'Replace Avenue',
                phone: '2555712'
            }

        httpBackend.whenDELETE(BASE_URL + '/contacts/' + contactToDelete._id).respond(CONTACTS_MOCK);
        
        //making the call
        returnedPromise  = ContactServiceMock.deleteContact(contactToDelete);

        returnedPromise.then(function (contacts){
            contacts.splice(contacts.indexOf(contactToDelete),1);
            result = contacts;            
        });

        //flushes any request then allow then() call to be executed when the promise is resolved in the success()
        httpBackend.flush(); 
        
        expect(result.length).toEqual(2);     
        expect(result.indexOf(contactToDelete)).toEqual(-1);  
    });


    it('should ADD a contact', function(){
        var result, 
            returnedPromise,
            newContact = {
                name: 'New Contact',
                address: 'New Address',
                phone: 'New Phone'
            }
        
        httpBackend.whenPOST(BASE_URL + '/contacts', newContact).respond(CONTACTS_MOCK);
        
        //making the call
        returnedPromise  = ContactServiceMock.saveContact(newContact);

        returnedPromise.then(function (contacts){
           contacts.push(newContact);
           result = contacts;
        });
        //flushes any request then allow then() call to be executed when the promise is resolved in the success()
        httpBackend.flush(); 
        expect(result.length).toBeGreaterThan(3);       
    });
    
    it('should UPDATE a contact with ID 1', function(){
        var result, 
            returnedPromise,
            contactToUpdate = CONTACTS_MOCK[0],
            contactUpdated = {
                _id: 1,
                name: 'Diego Freitas Siqueira Souza',
                address: 'Congo Street',
                phone: '553188848176'
            }
        
        httpBackend.whenPUT(BASE_URL + '/contacts/' + contactToUpdate._id, contactUpdated).respond(CONTACTS_MOCK);
        
        //making the call
        returnedPromise  = ContactServiceMock.saveContact(contactUpdated);

        returnedPromise.then(function (contacts){
           contacts[CONTACTS_MOCK.indexOf(contactToUpdate)] = contactUpdated;  
           result = contacts;         
        });
        
        //flushes any request then allow then() call to be executed when the promise is resolved in the success()
        httpBackend.flush(); 
        expect(result.length).toEqual(3);  
        expect(result.indexOf(contactToUpdate)).toEqual(-1);
        expect(result.indexOf(contactUpdated)).not.toEqual(-1);     
    });
})