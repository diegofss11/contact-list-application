var ContactListPageObjects = function() {
     this.addContactButtonFinder = element(by.css('.glyphicon-plus'));
     this.modalForm = element(By.id('contactForm'));
     this.nameInput = element(By.input('contact.name'));
     this.addressInput = element(By.input('contact.address'));
     this.phoneInput = element(By.input('contact.phone'));
};

module.exports = new ContactListPageObjects();