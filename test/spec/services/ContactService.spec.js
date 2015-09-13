xdescribe('ContactService - Testing CRUD Operations', function(){
    var contactServiceMock, promise, result,
        httpBackend, CONTACTS_MOCK, BASE_URL;

    beforeEach(module('contactListApp', 'itemsMock'));

    beforeEach( inject(function (_ContactService_, _CONTACTS_MOCK_, _$httpBackend_, _BASE_URL_) {
    	httpBackend = _$httpBackend_;
        contactServiceMock = _ContactService_;
        CONTACTS_MOCK = _CONTACTS_MOCK_;
        BASE_URL = _BASE_URL_;
    }));

    describe("#findAll", function(){
        beforeEach(function() {
            httpBackend.whenGET(BASE_URL + '/contacts').respond(CONTACTS_MOCK);
        });

        afterEach(function() {
            httpBackend.verifyNoOutstandingExpectation();
            httpBackend.verifyNoOutstandingRequest();
        });

        it('should FIND all contacts', function(){
            promise  = contactServiceMock.findAll();
            console.log('PROMISE', promise);

            promise.then(function (contacts){
                console.log('CONTACTS', contacts);
                expect(contacts.length).toEqual(3);
            });

            httpBackend.flush();
        });
    });

    describe('#delete', function() {
        var contactToDelete = {
            _id: 3,
            name: 'John Lima',
            address: 'Replace Avenue',
            phone: '2555712'
        };

        beforeEach(function() {
            httpBackend.whenDELETE(BASE_URL + '/contacts/' + contactToDelete._id).respond(CONTACTS_MOCK);
        });

        afterEach(function() {
            httpBackend.verifyNoOutstandingExpectation();
            httpBackend.verifyNoOutstandingRequest();
        });

        it('should DELETE a contact', function(){
            promise  = contactServiceMock.deleteContact(contactToDelete);

            promise.then(function (contacts){
                contacts.splice(contacts.indexOf(contactToDelete),1);
                result = contacts;
            });

            httpBackend.flush();

            expect(result.length).toEqual(2);
            expect(result.indexOf(contactToDelete)).toEqual(-1);
        });
    });


    describe('#addContact', function(){
        var newContact = {
            name: 'New Contact',
            address: 'New Address',
            phone: 'New Phone'
        };

        beforeEach(function(){
            httpBackend.whenPOST(BASE_URL + '/contacts', newContact).respond(CONTACTS_MOCK);
        });

        afterEach(function() {
            httpBackend.verifyNoOutstandingExpectation();
            httpBackend.verifyNoOutstandingRequest();
        });

        it('should ADD a contact', function(){
            promise  = contactServiceMock.saveContact(newContact);

            promise.then(function (contacts){
               contacts.push(newContact);
               result = contacts;
            });

            httpBackend.flush();

            expect(result.length).toBeGreaterThan(3);
        });
    });

    describe('#updateContact', function(){
        var contactToUpdate = CONTACTS_MOCK,
            contactUpdated = {
                _id: 1,
                name: 'Diego Freitas Siqueira Souza',
                address: 'Congo Street',
                phone: '553188848176'
            };

        beforeEach(function() {
            httpBackend.whenPUT(BASE_URL + '/contacts/' + contactToUpdate._id, contactUpdated).respond(CONTACTS_MOCK);
        });

        afterEach(function() {
            httpBackend.verifyNoOutstandingExpectation();
            httpBackend.verifyNoOutstandingRequest();
        });

        it('should UPDATE a contact with ID 1', function(){
            promise  = contactServiceMock.saveContact(contactUpdated);

            promise.then(function (contacts){
               contacts[CONTACTS_MOCK.indexOf(contactToUpdate)] = contactUpdated;
               result = contacts;
            });

            httpBackend.flush();

            expect(result.length).toEqual(3);
            expect(result.indexOf(contactToUpdate)).toEqual(-1);
            expect(result.indexOf(contactUpdated)).not.toEqual(-1);
        });
    });
});