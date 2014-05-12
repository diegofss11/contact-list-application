describe("E2E Testing - Open Modal Create Contact", function(){
	var ptor = protractor.getInstance();

	beforeEach( function () {
        ptor.get('/');//navigates the router to the route

        addContactButton = ptor.findElement( protractor.By.className('glyphicon-plus'));
        addContactButton.click();

    });

    it('Should open a modal', function () {
        modal = ptor.findElement( protractor.By.className( 'modal' ) );
        debugger;
    });	
});