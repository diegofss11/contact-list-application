describe('E2E Testing for Contact App', function(){	
    var contactPageObjects = require('../ContactListPageObjects.js');

	beforeEach( function () {
        browser.get('/');//navigates the router to the route
        browser.waitForAngular();
    });

    it('Should have a contact Add Button', function () {
        expect(contactPageObjects.addContactButton).toBeDefined(); 
    });

    it('Should open a modal form', function () {
        contactPageObjects.addContactButton.click();       

        expect(contactPageObjects.modalForm.isPresent()).toBeTruthy(); 
    });

    it('ADD Contact form\'s input is visible', function(){
        contactPageObjects.addContactButton.click();
        
        expect(contactPageObjects.nameInput).not.toBe(null);
        expect(contactPageObjects.addressInput).not.toBe(null);
        expect(contactPageObjects.phoneInput).not.toBe(null);   
        expect(contactPageObjects.modalWindowActionTitle()).toBe('Add Contact');  
    });  

    it('Should close modal', function(){
        contactPageObjects.addContactButton.click();  
        contactPageObjects.closeModal();          
        
        expect(contactPageObjects.modalWindow.isPresent()).toBeFalsy();      
    });  

    it('UPDATE Contact form\'s available', function(){
        var firstThumbnail = contactPageObjects.findFirstContact();
        firstThumbnail.findElement(By.className('contactDiv')).click();

        expect(contactPageObjects.modalWindowActionTitle()).toBe('Contact Details');
    }); 

    it('Open DELETE contact modal', function(){
        var firstThumbnail = contactPageObjects.findFirstContact();
        firstThumbnail.findElement(By.className('glyphicon-trash')).click(); 

        expect(contactPageObjects.modalDelete.isPresent()).toBeTruthy();
    });
});