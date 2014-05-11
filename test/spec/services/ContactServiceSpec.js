//E2E Testing
describe('ContactService - Testing CRUD Operations', function(){    
    var myServiceMock, $httpBackend,
        BASE_URL = "http://localhost:3000",
        mockContacts = [
            {
                name: 'Diego Souza',
                address: 'Hudson Street',
                phone: '553188848176'
            },
            {
                name: 'Albert Silva',
                address: 'Mkt Street',
                phone: '1456847585'
            }
        ];
 
    //mock contactListApp
    beforeEach(module('contactListApp'))
    
    beforeEach(inject(function (ContactService, $httpBackend){
        $httpBackendMock = $httpBackend;
        myServiceMock = ContactService; 

        $httpBackendMock.expectGET(BASE_URL + '/contacts/').respond(
            {"Success": true,"ErrorMessage": "","Result":[mockContacts]}); 

        spyOn(myServiceMock, 'findAll').andCallThrough(); // Calling of the 'findAll' method is ensured      
    }));            
    
    it('should find all the contacts', function(){
        expect(myServiceMock.findAll).toHaveBeenCalled();
        //$httpBackendMock.flush();
        //expect(contactsResponse.length).toBeGreaterThan(0);
    })    
    /*
    it('should add "contact" model', function(){
        var contact = {
            id: 0,
            name: 'Diego Souza',
            phone: '553188848176',
            Address: 'Hudson Street'
        }
        expect(myService.saveContact(contact)).toBe(true);
        expect(contacts.length).toEqual(11); //add 1 contact to contacts
    })

    it('should update "contact" model', function(){
        var contactToUpdate = contacts[0];
        var contactUpdated = {
            id: contactToUpdate.id,
            name: 'Test Name Updated',
            phone: contactToUpdate.phone,
            Address: contactToUpdate.address
        }
        expect(myService.updateContact(contactUpdated)).toBe(true);
        expect(contacts.length).toEqual(10); //no contact was added
        expect($.inArray(contactUpdated, contacts) != -1).toBeFalsy(); //exists in the array
    })*/
})