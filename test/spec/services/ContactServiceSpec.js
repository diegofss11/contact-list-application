describe('ContactService - Testing CRUD Operations', function(){    
    var ContactServiceMock,
        contactsMock,        
        httpBackend,
        baseURL;
         
    beforeEach(module('contactListApp', 'itemsMock'));    
	
    // Initialize the controller and a mock scope
  	beforeEach( inject(function (_ContactService_, CONTACTS_MOCK, _$httpBackend_, BASE_URL) {
    	httpBackend = _$httpBackend_;
        ContactServiceMock = _ContactService_;
        contactsMock = CONTACTS_MOCK;
        baseURL = BASE_URL;
    }));

    // make sure no expectations were missed in your tests.
    afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

	it('should FIND all contacts', function(){
        var result, 
            returnedPromise;

        httpBackend.whenGET(baseURL + '/contacts').respond(contactsMock);
        
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

        httpBackend.whenDELETE(baseURL + '/contacts/' + contactToDelete._id).respond(contactsMock);
        
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
        
        httpBackend.whenPOST(baseURL + '/contacts', newContact).respond(contactsMock);
        
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
            contactToUpdate = contactsMock[0],
            contactUpdated = {
                _id: 1,
                name: 'Diego Freitas Siqueira Souza',
                address: 'Congo Street',
                phone: '553188848176'
            }
        
        httpBackend.whenPUT(baseURL + '/contacts/' + contactToUpdate._id, contactUpdated).respond(contactsMock);
        
        //making the call
        returnedPromise  = ContactServiceMock.saveContact(contactUpdated);

        returnedPromise.then(function (contacts){
           contacts[contactsMock.indexOf(contactToUpdate)] = contactUpdated;  
           result = contacts;         
        });
        //flushes any request then allow then() call to be executed when the promise is resolved in the success()
        httpBackend.flush(); 
        expect(result.length).toEqual(3);  
        expect(result.indexOf(contactToUpdate)).toEqual(-1);
        expect(result.indexOf(contactUpdated)).not.toEqual(-1);     
    });
})