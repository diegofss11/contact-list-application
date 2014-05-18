describe("E2E Testing - Open Modal Create Contact", function(){
	
    var contactPageObjects = require('../ContactListPageObjects.js') ;

	beforeEach( function () {
        browser.get('/');//navigates the router to the route
        browser.waitForAngular();
    });

    it('Should have a addButton', function () {
        expect(contactPageObjects.addContactButtonFinder).toBeDefined(); 
    });

    it('Should open a modal form', function () {
        contactPageObjects.addContactButtonFinder.click();
        expect(contactPageObjects.modalForm.isDisplayed()).toBe(true); 
    });

    it('ADD Contact form\'s input is visible', function(){
        expect(contactPageObjects.nameInput).not.toBe(null);
        expect(contactPageObjects.addressInput).not.toBe(null);
        expect(contactPageObjects.phoneInput).not.toBe(null);       
    });
});