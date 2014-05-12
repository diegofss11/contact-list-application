//E2E Testing
describe('ContactService - Testing CRUD Operations', function(){    
    //mock contactListApp
    var myServiceMock, $httpBackend,
        BASE_URL = "http://localhost:3000", $scope, controller, $httpBackend;

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
    
    beforeEach(module('contactListApp'));

    beforeEach( inject(function ($controller, $rootScope, _$httpBackend_, ContactService, $modal, $timeout) {
        $httpBackend = _$httpBackend_;
        $scope = $rootScope.$new();
        controller = $controller('ContactController', {
            $scope: $scope,
            ContactService: ContactService,
            $modal: $modal,
            $timeout: $timeout
        });
    }));

    it('testing', function(){
        expect(controller.hasAlertVisible).toBe("false");
    });

    /*
    it('should find all the contacts', inject( function (ContactService, $q, $http, config){
        // Return a successful promise from the ContactService
        var deferredSuccess = $q.defer();
        spyOn(ContactService, 'findAll').andReturn(deferredSuccess.promise);
        ContactControllerMock.findAll().then(
            function(contacts){
                $scope.contacts = contacts;
            },
            function(reason){
                alert('Failed: ' + reason);
            });  
        
        expect(ContactService.findAll).toHaveBeenCalled();
        deferredSuccess.resolve(); // resolves the promise
       
        //expect(scope.contacts.length).toBeGreaterThan(0);        
    }))  */  
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