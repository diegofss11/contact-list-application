describe('ContactService - Testing Add and Edit', function(){
    
    var myService, contacts;
 
    //mock contactListApp
    beforeEach(module('contactListApp'))
    
    
    beforeEach(inject(function (ContactService){
       myService = ContactService;
       contacts = myService.findAll();
    }))

    it('should find all the contacts', function(){
        expect(contacts.length).toEqual(10);
    })    

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
    })
})