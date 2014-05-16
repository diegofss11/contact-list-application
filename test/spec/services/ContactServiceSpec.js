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
        var expected, 
            result, 
            returnedPromise;

        httpBackend.whenGET(baseURL + '/contacts').respond(contactsMock);
        
        //making the call
        returnedPromise  = ContactServiceMock.findAll();

        returnedPromise.then(function (contacts){
            result = contacts;
        });

        httpBackend.flush(); //flushes any request then allow then() call to be executed when the promise is resolved in the success()
        expect(result.length).toEqual(3);       
    });  

    it('should DELETE a contact', function(){
        var expected, 
            result, 
            returnedPromise,
            contactToDelete = {
                _id: 3,
                name: 'John Lima',
                address: 'Replace Avenue',
                phone: '2555712'
            }

        httpBackend.whenDELETE(baseURL + '/contacts/' + contactToDelete._id).respond({
            "Result" : contactsMock.splice(2,1)
        });
        
        //making the call
        returnedPromise  = ContactServiceMock.deleteContact(contactToDelete);

        returnedPromise.then(function (contacts){
            result = contacts;
        });

        httpBackend.flush(); //flushes any request then allow then() call to be executed when the promise is resolved in the success()
        expect(result.length).toEqual(2);       
    });


    /*it('should ADD contact', function(){
        var expected, 
            result, 
            returnedPromise,
            newContact = {
                name: 'New Contact',
                address: 'New Address',
                phone: 'New Phone'
            }

        httpBackend.whenPOST(baseURL + '/contacts', newContact).respond(200);
        
        //making the call
        returnedPromise  = ContactServiceMock.saveContact(newContact);

        returnedPromise.then(function (response){
            result = response;
        });

        httpBackend.flush(); //flushes any request then allow then() call to be executed when the promise is resolved in the success()
        expect(result.length).toBeGreaterThan(0);       
    });*/
})