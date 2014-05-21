var ContactListPageObjects = function() {
    this.addContactButton = element(By.css('.glyphicon-plus'));
    this.modalForm = element(By.id('contactForm'));
    this.nameInput = element(By.input('contact.name'));
    this.addressInput = element(By.input('contact.address'));
    this.phoneInput = element(By.input('contact.phone'));
    this.modalWindow = element(By.className('modal-content'));
    this.modalDelete = element(By.className('alert-warning'));

	this.findFirstContact = function(){
    	return element.all(By.repeater('contact in contacts')).first();
    };

    this.modalWindowActionTitle = function(){
        return element(By.binding('modalTitle')).getText();
    };

    this.closeModal = function(){
    	element(By.buttonText('Cancel')).click();
    };
};

module.exports = new ContactListPageObjects();