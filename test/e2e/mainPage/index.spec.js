describe("E2E Testing - Open Modal Create Contact", function(){
	
    var pageObjects;

	beforeEach( function () {
        //pageObjects = new ContactListPageObjects();
    });

    it('Should have a addButton', function () {
        browser.get('/');//navigates the router to the route
        var addContactButtonFinder = element(by.css('.glyphicon-plus'));  
        expect(addContactButtonFinder).toBeDefined(); 

    });
    /*
    it('Should open a modal', function () {
        browser.get('/');//navigates the router to the route
        var addContactButtonFinder = element(by.css('.glyphicon-plus'));       
        //addContactButtonFinder.click();
        /*var modal = element(by.css('.modal-content'));  
        expect(modal).toEqual(1);    
    });*/
});